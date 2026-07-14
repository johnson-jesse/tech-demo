/// Copyright (c) 2025 Jesse A. Johnson (Fizzog)
/// Attribution required. See LICENSE.

import { Actor, Steering } from "./const";
import { Vector } from "./Vector";

export class Guide implements Actor {
  private target: Vector;
  private show: boolean;

  constructor() {
    this.target = Vector.Zero();
    this.show = false;
    this.handleKeyPress.bind(this);
  }

  setTarget(x: number, y: number) {
    this.target.set(x, y);
  }

  update(_elapsed: number) {
    // Nothing to do but sip some tequila
  }

  draw(ctx: CanvasRenderingContext2D) {
    if (this.show) {
      ctx.save();
      ctx.translate(this.target.x, this.target.y);
      ctx.beginPath();
      ctx.strokeStyle = "white";
      ctx.arc(0, 0, Steering.arrive_radius, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.restore();
    }
  }

  handleKeyPress(event: KeyboardEvent) {
    switch (event.code) {
      case "KeyG":
        this.show = !this.show;
        event.preventDefault();
        break;
    }
  }
}
