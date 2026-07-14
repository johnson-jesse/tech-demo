/// Copyright (c) 2025 Jesse A. Johnson (Fizzog)
/// Attribution required. See LICENSE.

import { Actor, Movement, Steering } from "./const";
import { Vector } from "./Vector";

export class Ship implements Actor, Movement {
  private img: HTMLImageElement;
  private _position: Vector;
  private _velocity: Vector;
  private target: Vector;
  private state: typeof this.update;

  constructor() {
    this.img = new Image();
    this.img.src = "./Ship.png";
    this._position = new Vector(150, 150);
    this._velocity = Vector.Zero();
    this.target = Vector.Zero();
    this.state = this.arrive;
  }

  setTarget(x: number, y: number) {
    this.target.set(x, y);
  }

  update(elapsed: number) {
    this.state(elapsed);
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.translate(this._position.x, this._position.y);
    ctx.rotate(this._velocity.facing());
    const width = this.img.width;
    const height = this.img.height;
    ctx.drawImage(this.img, -width / 2, -height / 2);
    ctx.restore();
  }

  get position() {
    return this._position.clone();
  }

  get velocity() {
    return this._velocity.clone();
  }

  private arrive(elapsed: number) {
    const steering = this.target.clone().subtract(this.position);
    const dist = steering.magnitude();

    if (dist > Steering.arrive_radius) {
      steering.setMagnitude(Steering.speed);
    } else {
      steering.setMagnitude(Steering.speed * (dist / Steering.arrive_radius));
    }

    steering.subtract(this.velocity).limit(Steering.force);
    this._velocity.add(steering);
    this._velocity.limit(Steering.speed * (1 + elapsed));
    this._position.add(this._velocity);

    if (this._position.distance(this.target) < Steering.arrive_radius * 0.75) {
      this.state = this.observe;
    }
  }

  private observe(elapsed: number) {
    const steering = this.target.clone().subtract(this.position);
    const dist = steering.magnitude();
    steering.setMagnitude(
      Steering.speed * 0.75 * (dist / Steering.arrive_radius) * (1 + elapsed)
    );

    if (steering.magnitude() < Steering.speed * 0.5) steering.set(0, 0);

    this._velocity.add(steering).limit(this._velocity.magnitude());
    this._position.add(this._velocity);

    if (this._position.distance(this.target) > 0.01) {
      const directionToTarget = this._position.direction(this.target);
      this._velocity.setFrom(directionToTarget.scale(0.0001));
    }

    if (this._position.distance(this.target) > Steering.arrive_radius) {
      this.state = this.arrive;
    }
  }
}
