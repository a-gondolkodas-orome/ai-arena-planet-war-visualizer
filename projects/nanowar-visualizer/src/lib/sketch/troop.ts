import { Planet } from './planet';
import { Player } from './player';
import { Point } from './point';

import * as p5 from 'p5';

export class Troop {
  from: Planet;
  to: Planet;
  distance: number;
  progress: number;
  size: number;
  player: Player;
  uid: number;

  constructor(
    id: number,
    from: Planet,
    to: Planet,
    player: Player,
    size: number,
    distance: number,
    progress: number,
  ) {
    this.uid = id;
    this.from = from;
    this.to = to;
    this.player = player;
    this.size = size;
    this.distance = distance;
    this.progress = progress;
  }

  render(ctx: p5, frame_percent: number): void {
    const a: Point = this.from.pos;
    const b: Point = this.to.pos;
    const dx: number = b.x - a.x;
    const dy: number = b.y - a.y;
    const angle = Math.atan2(dy, dx);

    const lenfrom: number = (this.progress / this.distance) * Math.sqrt(dx * dx + dy * dy);
    const lento: number = ((this.progress + 1) / this.distance) * Math.sqrt(dx * dx + dy * dy);
    const len = ctx.lerp(lenfrom, lento, frame_percent);

    const Q: Point = new Point(Math.cos(angle) * len, Math.sin(angle) * len);
    const x = a.x + Q.x;
    const y = a.y + Q.y;
    const sx = a.x + Math.cos(angle) * (this.from.size / 2);
    const sy = a.y + Math.sin(angle) * (this.from.size / 2);
    const ex = b.x - Math.cos(angle) * (this.to.size / 2);
    const ey = b.y - Math.sin(angle) * (this.to.size / 2);

    ctx.strokeWeight(1);
    ctx.stroke('white');
    ctx.fill(this.player.color);
    ctx.line(sx, sy, ex, ey);
    ctx.text(this.size, x, y - 20 - 5);
    ctx.noStroke();
    ctx.circle(x, y, 20);
    ctx.strokeWeight(1);
  }
}
