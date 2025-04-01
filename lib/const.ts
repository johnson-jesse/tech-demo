import { Vector } from "./Vector";

export interface Actor {
  update: (elapsed: number) => void;
  draw: (ctx: CanvasRenderingContext2D) => void;
  setTarget?: (x: number, y: number) => void;
  handleKeyDown?: (event: KeyboardEvent) => void;
  handleKeyUp?: (event: KeyboardEvent) => void;
  handleKeyPress?: (event: KeyboardEvent) => void;
}

export interface Movement {
  position: Vector;
  velocity: Vector;
}

export const Steering = {
  speed: 1.5,
  force: 0.05,
  arrive_radius: 150,
  arrive_offset: 0,
} as const;

export const Layer = {
    surface_main: 9999
} as const;

export const MINIMUM_BROWSER_WIDTH = 768;