import { Planet } from './planet';
import { Player } from './player';
import { Troop } from './troop';
import { JsonPlanet, JsonPlanetInit, JsonPlayer, JsonTick, JsonTroops } from './interfaces';
import p5 from 'p5';

export class GameModule {
  planets: Planet[];
  players: Player[];
  troops: Troop[];

  constructor(planet_data: JsonPlanetInit[], player_data: JsonPlayer[], ctx: p5) {
    this.players = player_data.map((x) => new Player(x, ctx));
    this.planets = planet_data.map((x) => this.createPlanet(x));
    this.troops = [];
  }

  render(ctx: p5, frame_percent: number): void {
    this.planets.forEach((p) => p.render(ctx));
    this.troops?.forEach((t) => t.render(ctx, frame_percent));
  }

  update(data: JsonTick) {
    const { planets, troops }: { planets: JsonPlanet[]; troops: JsonTroops[] } = data;
    for (const player of this.players) player.armySize = 0;
    this.troops = troops.map((x) => this.createTroops(x));
    this.planets.forEach((p, i) => {
      p.update(planets[i].population, this.players[planets[i].player] || null);
      if (planets[i].player != null) this.players[planets[i].player].armySize += planets[i].population;
    });
  }

  createPlanet({
    id,
    x,
    y,
    size,
    production,
    population,
    player,
  }: {
    id: number;
    x: number;
    y: number;
    size: number;
    production: number;
    population: number;
    player: number;
  }): Planet {
    return new Planet(id, x, y, size, production, population, this.players[player] || null);
  }

  createTroops({
    id,
    from,
    to,
    player,
    size,
    distance,
    progress,
  }: {
    id: number;
    from: number;
    to: number;
    player: number;
    size: number;
    distance: number;
    progress: number;
  }): Troop {
    this.players[player].armySize += size;
    return new Troop(
      id,
      this.planets[from],
      this.planets[to],
      this.players[player],
      size,
      distance,
      progress,
    );
  }
}
