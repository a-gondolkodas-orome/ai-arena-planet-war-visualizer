export interface JsonLog {
  init: JsonInit;
  ticks: JsonTick[];
}

export interface JsonInit {
  board: JsonBoard;
  planets: JsonPlanetInit[];
  players: JsonPlayer[];
}

export interface JsonTick {
  planets: JsonPlanet[];
  troops: JsonTroops[];
  messages: { [bot_id: string] : JsonBotMessage; };
}

export interface JsonBotMessage {
  received: JsonMessage[];
  sent: JsonMessage[];
  commandError?: string | null;
  botLog?: string | null;
}

export interface JsonMessage {
  message: string;
  timestamp: number | null;
}

export interface JsonBoard {
  width: number;
  height: number;
}

export interface JsonPlanetInit {
  id: number;
  x: number;
  y: number;
  size: number;
  production: number;
  population: number;
  player: number;
}

export interface JsonPlanet {
  id: number;
  population: number;
  player: number;
}

export interface JsonPlayer {
  id: string;
  name: string;
  index: number;
}

export interface JsonTroops {
  id: number;
  from: number;
  to: number;
  player: number;
  size: number;
  distance: number;
  progress: number;
}
