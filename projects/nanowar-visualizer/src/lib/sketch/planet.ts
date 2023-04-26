import { Player } from './player';
import { Point } from './point';

import p5 from 'p5';

export class Planet {
  uid: number;
  pos: Point;
  size: number;
  production: number;
  population: number;
  player?: Player;

  constructor(id: number, x: number, y: number, size: number, production: number, population: number, player: Player) {
    this.uid = id;
    this.pos = new Point(x, y);
    this.size = size * 5;
    this.production = production;
    this.population = population;
    this.player = player;
  }

  static uninhabitedPlanet: p5.Image | null = null;

  render(ctx: p5): void {
    if(Planet.uninhabitedPlanet === null) Planet.uninhabitedPlanet = ctx.loadImage("assets/min_planet0.png");
    const color = this.player?.color ?? '#ffaaaaaa';

    ctx.noStroke();
    if(this.player?.planetImage == null) {
        if(this.player == null) {
            ctx.image(Planet.uninhabitedPlanet, this.pos.x - this.size / 2, this.pos.y - this.size / 2, this.size, this.size);
        } else {
            ctx.fill(color);
            ctx.circle(this.pos.x , this.pos.y, this.size);
        }
    } else {
    ctx.image(this.player?.planetImage, this.pos.x - this.size / 2, this.pos.y - this.size / 2, this.size, this.size);
    }
    ctx.stroke('#ffffff');
    ctx.strokeWeight(1);
    ctx.textSize(12);
    ctx.text(this.population, this.pos.x, this.pos.y);
    ctx.textSize(6);
    ctx.text(`${this.uid}, ${this.production}`, this.pos.x, this.pos.y - 12);
    ctx.textSize(12);
    ctx.noStroke();
  }

  update(population: number, player: Player) {
    this.population = population;
    this.player = player;
  }

}


