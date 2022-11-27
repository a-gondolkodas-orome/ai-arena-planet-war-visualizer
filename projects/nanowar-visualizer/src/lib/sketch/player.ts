import { JsonPlayer } from './interfaces';

export class Player {
  color: string;
  name: string;
  uid: number;

  constructor(player_data: JsonPlayer) {
    this.uid = player_data.id;
    this.name = player_data.name;
    this.color = Player.colors[this.uid % Player.colors.length];
  }

  static colors: string[] = ['#FFFC31', '#fe0000', '#979801', '#06a300', '#011efe', '#fe00f6'];
}
