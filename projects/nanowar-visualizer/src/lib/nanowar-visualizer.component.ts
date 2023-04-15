import { AfterViewInit, Component, Input, OnChanges, OnInit } from "@angular/core";
import {
  faAngleRight,
  faAngleLeft,
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faPause,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import p5 from "p5";
import { GameModule } from "./sketch/game.module";
import {
  JsonBoard,
  JsonInit,
  JsonLog,
  JsonPlanetInit,
  JsonPlayer,
  JsonTick,
} from "./sketch/interfaces";
import { BotMessageBundle } from "./sketch/message";


@Component({
  selector: "lib-nanowar-visualizer",
  templateUrl: "./nanowar-visualizer.component.html",
  styleUrls: ["./nanowar-visualizer.component.css"],
})
export class NanowarVisualizerComponent implements OnChanges, AfterViewInit {
  @Input() public jsonstring!: string;
  @Input() public bot_id!: string;

  public left_arrow = faAngleLeft;
  public right_arrow = faAngleRight;
  public start_arrow = faAngleDoubleLeft;
  public end_arrow = faAngleDoubleRight;
  public pause_icon = faPause;
  public star_icon = faPlay;
  public messages: BotMessageBundle | null = null;

  public time = 0;
  public last = 0;
  public isAnimating = false;
  public fps = 3;

  private instance?: p5;
  private last_time = 0;
  private accFrameTime = 0;


  private jsonLog?: JsonLog;

  private sketch(ctx: p5): void {
    let game: GameModule;
    let updates: JsonTick[];
    let scale: number;
    let backgroundImage: p5.Image;
    let last_tick = -1;
    ctx.setup = () => {
      const { init, ticks }: { init: JsonInit; ticks: JsonTick[] } = (this.jsonLog = JSON.parse(this.jsonstring));
      const {
        board,
        planets,
        players,
      }: { board: JsonBoard; planets: JsonPlanetInit[]; players: JsonPlayer[] } = init;
      const canvasProps = this.getCanvasProps(board);
      const C = ctx.createCanvas(canvasProps.width, canvasProps.height);
      scale = canvasProps.scale;
      C.parent("canvas");
      backgroundImage = ctx.loadImage("./assets/bg1.png");
      ctx.scale(scale);

      updates = ticks;
      this.last = updates.length - 1;

      game = new GameModule(planets, players, ctx);
      ctx.textAlign(ctx.CENTER, ctx.CENTER);
    };

    ctx.draw = () => {
      if (this.isAnimating) {
        const currentTime = window.performance.now();
        const deltaTime = window.performance.now() - this.last_time;
        this.last_time = currentTime;

        this.accFrameTime += deltaTime / 1000;

        const d = Math.floor(this.accFrameTime * this.fps);
        this.accFrameTime = this.accFrameTime - d / this.fps;
        this.time = Math.min(this.time + d, this.last);
      }

      if (this.time <= this.last && this.time >= 0) {
        ctx.scale(scale);
        ctx.background(backgroundImage ?? "#000000");
        game.update(updates[this.time]);
        game.render(ctx, this.isAnimating ? this.accFrameTime * this.fps : 1);
        game.troops = [];
        if (last_tick != this.time) {
          this.messages = new BotMessageBundle(updates[this.time].messages[this.bot_id]);
        }
        last_tick = this.time;
      }


      if (this.time == this.last && this.isAnimating) {
        this.isAnimating = false;
      }
    };
  }

  private getCanvasProps({ width, height }: JsonBoard) {
    const clientHeight =
      document.querySelector<HTMLDivElement>("#container")?.clientHeight ?? 600;
    const clientWidth = document.querySelector<HTMLDivElement>("#canvas")?.clientWidth ?? 800;
    const wratio = clientWidth / width;
    const hratio = clientHeight / height;
    const min_ratio = Math.min(wratio, hratio);
    return { width: width * min_ratio, height: height * min_ratio, scale: min_ratio };
  }

  onTickChanged(new_tick: number | null): void {
    let selected_tick: number = new_tick ?? this.time;
    selected_tick = Math.min(selected_tick, this.last);
    selected_tick = Math.max(selected_tick, 0);
    this.time = selected_tick;
    this.animateEndButtonClickedEvent();
    this.instance?.redraw();
  }

  onTickInputLostFocus(): void {
    // TODO(Kristofy): There is a bug, that when the input loses focus after deleting the value, the user cannot see, that the value is still the last valid value
    // let tmp = this.time;
    // this.onTickChanged(this.last_time);
    // this.onTickChanged(tmp);

  }

  nextButtonClickedEvent(): void {
    if (this.time < this.last) this.time++;
    this.animateEndButtonClickedEvent();
    this.instance?.redraw();
  }

  prevButtonClickedEvent(): void {
    if (this.time > 0) this.time--;
    this.animateEndButtonClickedEvent();
    this.instance?.redraw();
  }

  restartButtonClickedEvent(): void {
    this.time = 0;
    this.animateEndButtonClickedEvent();
    this.instance?.redraw();
  }

  endButtonClickedEvent(): void {
    this.time = this.last;
    this.instance?.redraw();
  }

  animateStartButtonClickedEvent(): void {
    this.isAnimating = true;
    this.accFrameTime = 0;
    this.last_time = window.performance.now();
    this.instance?.loop();
  }

  animateEndButtonClickedEvent(): void {
    this.isAnimating = false;
    this.instance?.noLoop();
  }

  fpsInputEvent(event: Event): void {
    const element = event.target as HTMLInputElement;
    this.fps = parseFloat(element.value) ?? 1;
  }

  ngOnChanges(): void {
    if (this.jsonstring) {
      this.instance = new p5(this.sketch.bind(this));
    }
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (this.jsonLog) {
        const { width, height, scale } = this.getCanvasProps(this.jsonLog.init.board);
        this.instance?.resizeCanvas(width, height);
        this.instance?.scale(scale);
      }
    }, 0);
  }
}
