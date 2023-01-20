import * as p5 from 'p5';
import { JsonPlayer } from './interfaces';

export class Player {
  color: string;
  name: string;
  uid: number;
  planetImage: p5.Image;
  troopImage: p5.Image;

  constructor(player_data: JsonPlayer, ctx: p5) {
    this.uid = player_data.id;
    this.name = player_data.name;
    this.color = Player.colors[this.uid % Player.colors.length];
    this.planetImage = ctx.loadImage(Player.planets[this.uid % Player.planets.length]);
    this.troopImage = ctx.loadImage(Player.troops[this.uid % Player.troops.length]);
  }

  static colors: string[] = ['#FFFC31', '#fe0000', '#979801', '#06a300', '#011efe', '#fe00f6'];
  static planets: string[] = Array.from({ length: 8 }, (_, i) => `assets/min_planet${i+1}.png`);
  static troops: string[] = Array.from({ length: 8 }, (_, i) => `assets/min_troop${i+1}.png`);;
}
