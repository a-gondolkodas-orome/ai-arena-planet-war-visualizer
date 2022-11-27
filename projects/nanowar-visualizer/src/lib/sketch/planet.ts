import { Player } from './player';
import { Point } from './point';

import * as p5 from 'p5';

export class Planet {
  uid: number;
  pos: Point;
  size: number;
  population: number;
  player?: Player;

  constructor(id: number, x: number, y: number, size: number, population: number, player: Player) {
    this.uid = id;
    this.pos = new Point(x, y);
    this.size = size;
    this.population = population;
    this.player = player;
  }

  render(ctx: p5): void {
    const color = this.player?.color ?? '#ffaaaaaa';
    //const color = this.player?.color || "#aaaaaa"

    ctx.noStroke();
    ctx.fill(color);
    ctx.circle(this.pos.x, this.pos.y, this.size);
    ctx.stroke('#ffffff');
    ctx.strokeWeight(1);
    ctx.text(this.population, this.pos.x, this.pos.y);
    ctx.strokeWeight(1);
    ctx.noStroke();
  }

  update(population: number, player: Player) {
    this.population = population;
    this.player = player;
  }
}
