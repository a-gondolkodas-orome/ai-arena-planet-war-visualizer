import { Component, Input, OnChanges } from "@angular/core";
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
import { Player } from "./sketch/player";


@Component({
  selector: "lib-nanowar-visualizer",
  templateUrl: "./nanowar-visualizer.component.html",
  styleUrls: ["./nanowar-visualizer.component.css"],
})
export class NanowarVisualizerComponent implements OnChanges {
  @Input() public jsonstring!: string;
  @Input() public bot_id!: string;

  public left_arrow = faAngleLeft;
  public right_arrow = faAngleRight;
  public start_arrow = faAngleDoubleLeft;
  public end_arrow = faAngleDoubleRight;
  public pause_icon = faPause;
  public star_icon = faPlay;
  public messages: BotMessageBundle | null = null;
  public game?: GameModule;

  private last_set_time = 0;
  public time = 0;
  public last = 0;
  public isAnimating = false;
  public fps = 3;

  private instance?: p5;
  private last_time = 0;
  private accFrameTime = 0;

  private updates: JsonTick[] = [];

  private jsonLog?: JsonLog;

  private sketch(ctx: p5): void {
    let scale: number;
    let backgroundImage: p5.Image;
    let last_tick = -1;
    let board_width = 0;
    let board_height = 0;

    ctx.setup = () => {
      const { init, ticks }: { init: JsonInit; ticks: JsonTick[] } = (this.jsonLog = JSON.parse(this.jsonstring));
      const {
        board,
        planets,
        players,
      }: { board: JsonBoard; planets: JsonPlanetInit[]; players: JsonPlayer[] } = init;
      const { width, height }: { width: number; height: number } = board;
      board_width = width;
      board_height = height;
      const clientHeight =
        document.querySelector<HTMLDivElement>("#container")?.clientHeight ?? 600;
      const clientWidth = document.querySelector<HTMLDivElement>("#canvas")?.clientWidth ?? 800;
      const wratio = clientWidth / board_width;
      const hratio = clientHeight / board_height;
      const min_ratio = Math.min(wratio, hratio);

      const C = ctx.createCanvas(board_width * min_ratio, board_height * min_ratio);
      C.parent("canvas");
      backgroundImage = ctx.loadImage("./assets/bg1.png");

      scale = min_ratio;
      ctx.scale(min_ratio);

      this.updates = ticks;
      this.last = this.updates.length - 1;

      // this.players = players.map((player) => ({ ...player, planetImagePath: Player.getPlanetImagePath(player.index) }));

      this.game = new GameModule(planets, players, ctx);


      ctx.textAlign(ctx.CENTER, ctx.CENTER);
    };

    ctx.draw = () => {
      if (!this.game) { throw new Error("this.game not initialized"); }
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
        this.game.update(this.updates[this.time]);
        this.updates[this.time]?.messages[this.bot_id];
        this.game.render(ctx, this.isAnimating ? this.accFrameTime * this.fps : 1);
        this.game.troops = [];
        if (last_tick != this.time) {
          this.messages = new BotMessageBundle(this.updates[this.time].messages[this.bot_id]);
        }
        last_tick = this.time;
      }

      if (this.time == this.last && this.isAnimating) {
        this.isAnimating = false;
      }
    };

    ctx.windowResized = function() {
      const clientHeight = document.querySelector<HTMLDivElement>("#container")?.clientHeight ?? 600;
      const clientWidth = document.querySelector<HTMLDivElement>("#canvas")?.clientWidth ?? 800;
      const wratio = clientWidth / board_width;
      const hratio = clientHeight / board_height;
      const min_ratio = Math.min(wratio, hratio);
      const C = ctx.resizeCanvas(board_width * min_ratio, board_height * min_ratio);
      scale = min_ratio;
      ctx.scale(scale);
    };
  }

  onSelectedPlayerChanged(event: any) {
    const value = event.value;
    this.bot_id = value;
    this.messages = new BotMessageBundle(this.updates[this.time].messages[this.bot_id]);
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

  protected readonly Player = Player;
}
