/// Copyright (c) 2025 Jesse A. Johnson (Fizzog)
/// Attribution required. See LICENSE.

export class Vector {
  x: number;
  y: number;

  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  set(x: number, y: number) {
    this.x = x;
    this.y = y;
    return this;
  }

  setFrom(vector: Vector) {
    this.x = vector.x;
    this.y = vector.y;
    return this;
  }

  add(other: Vector) {
    this.x += other.x;
    this.y += other.y;
    return this;
  }

  subtract(other: Vector) {
    this.x -= other.x;
    this.y -= other.y;
    return this;
  }

  scale(scalar: number) {
    this.x *= scalar;
    this.y *= scalar;
    return this;
  }

  rotate(increment: number) {
    const rad = increment * (Math.PI / 180)
    const cosA = Math.cos(rad);
    const sinA = Math.sin(rad);
    const _x = this.x;
    const _y = this.y;

    this.x = _x * cosA - _y * sinA;
    this.y = _x * sinA + _y * cosA;

    return this;
  }

  normalize() {
    if (this.x != 0 || this.y != 0) {
      const factor = 1 / this.magnitude();
      this.x = factor * this.x;
      this.y = factor * this.y;
    }

    return this;
  }

  setMagnitude(max: number) {
    return this.normalize().scale(max);
  }

  limit(max: number) {
    return this.magnitude() > max ? this.setMagnitude(max) : this;
  }

  magnitude() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  facing() {
    return Math.atan2(this.y, this.x);
  }

  distance(other: Vector) {
    return Math.sqrt(
      (this.x - other.x) * (this.x - other.x) +
        (this.y - other.y) * (this.y - other.y)
    );
  }

  direction(other: Vector) {
    const dx = other.x - this.x;
    const dy = other.y - this.y;
    const mag = Math.sqrt(dx * dx + dy * dy);

    return mag === 0 ? new Vector(0, 0) : new Vector(dx / mag, dy / mag);
  }

  clone() {
    return new Vector(this.x, this.y);
  }

  static Zero() {
    return new Vector(0, 0);
  }
}
