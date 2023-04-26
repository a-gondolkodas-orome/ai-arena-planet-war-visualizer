import p5 from 'p5';
import { JsonPlayer } from './interfaces';

export class Player {
  index: number;

  id: string;
  color: string;
  name: string;
  planetImagePath: string;
  planetImage: p5.Image;
  troopImage: p5.Image;
  armySize = 0;

  constructor(player_data: JsonPlayer, ctx: p5) {
    this.index = player_data.index;
    this.id = player_data.id;
    this.name = player_data.name;
    this.color = Player.colors[this.index % Player.colors.length];
    this.planetImagePath = Player.planets[this.index % Player.planets.length];
    this.planetImage = ctx.loadImage(this.planetImagePath);
    this.troopImage = ctx.loadImage(Player.troops[this.index % Player.troops.length]);
  }

  static colors: string[] = ['#FFFC31', '#fe0000', '#979801', '#06a300', '#011efe', '#fe00f6'];
  static planets: string[] = Array.from({ length: 8 }, (_, i) => `assets/min_planet${i+1}.png`);
  static troops: string[] = Array.from({ length: 8 }, (_, i) => `assets/min_troop${i+1}.png`);
}
