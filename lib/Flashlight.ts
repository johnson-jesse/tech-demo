/// Copyright (c) 2025 Jesse A. Johnson (Fizzog)
/// Attribution required. See LICENSE.

import { Actor, Movement } from "./const";
import { Vector } from "./Vector";

export class Flashlight implements Actor {
  private position: Vector;
  private angle: number;
  private user: Movement;

  constructor(user: Movement) {
    this.user = user;
    this.position = Vector.Zero();
    this.angle = 0;
  }

  update(_elapsed: number) {
    this.position = this.user.position;
    this.angle = this.user.velocity.rotate(-90).facing();
  }

  draw(ctx: CanvasRenderingContext2D) {
    this.drawMask(ctx);
    this.drawLight(ctx);
  }

  private drawMask(ctx: CanvasRenderingContext2D) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.save();
  
    ctx.fillStyle = "rgba(0, 0, 0, 0.9)";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.translate(this.position.x, this.position.y);
    ctx.rotate(this.angle);

    const gradient = ctx.createRadialGradient(0, 0, 20, 0, 0, 300);
    gradient.addColorStop(0, "rgba(255, 255, 255, 0.99)");
    gradient.addColorStop(1, "rgba(255, 255, 255, 0.5)");

    ctx.globalCompositeOperation = "destination-out";
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(100, 300);
    ctx.lineTo(-100, 300);
    ctx.closePath();
    ctx.fill();
    ctx.globalCompositeOperation = "source-over";
    ctx.restore();
  }

  private drawLight(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.translate(this.position.x, this.position.y);
    ctx.rotate(this.angle);

    const gradient = ctx.createRadialGradient(0, 0, 20, 0, 0, 300);
    gradient.addColorStop(0, "rgba(255, 255, 255, 0.3)");
    gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

    ctx.globalCompositeOperation = "lighter";
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(100, 300);
    ctx.lineTo(-100, 300);
    ctx.closePath();
    ctx.fill();
    ctx.globalCompositeOperation = "source-over";
    ctx.restore();
  }
}
