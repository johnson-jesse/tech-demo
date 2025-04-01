/// Copyright (c) 2025 Jesse A. Johnson (Fizzog)
/// Attribution required. See LICENSE.

import { Ship } from "./Ship";
import { Flashlight } from "./Flashlight";
import { Actor } from "./const";
import { Guide } from "./Guide";

export class Director {
  private ctx: CanvasRenderingContext2D;
  private previous: number = NaN;
  private cast: Actor[] = [];
  private paused: boolean;

  private constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
    const s = new Ship();
    this.cast.push(new Flashlight(s));
    this.cast.push(s);
    this.cast.push(new Guide());
    this.initializeListeners();
    this.paused = false;
    window.requestAnimationFrame((t) => this.step(t));
  }

  static instanceOf(ctx: CanvasRenderingContext2D, valid: boolean) {
    const d = new Director(ctx);
    if (!valid) d.halt();
    return d;
  }

  halt() {
    if (!this.paused) {
      this.listenStop();
      this.paused = true;
    }
  }

  restart() {
    if (this.paused) {
      this.initializeListeners();
      this.paused = false;
      window.requestAnimationFrame((t) => this.step(t));
    }
  }

  private listenStop() {
    document.removeEventListener("mousemove", this.handleMouse);
    document.removeEventListener("keydown", this.handleKeyDown);
    document.removeEventListener("keyup", this.handleKeyUp);
    document.removeEventListener("keypress", this.handleKeyPress);
  }

  private handleMouse(event: MouseEvent) {
    this.cast.forEach((a) => a.setTarget?.(event.clientX, event.clientY));
  }

  private handleKeyDown(event: KeyboardEvent) {
    this.cast.forEach((a) => a.handleKeyDown?.(event));
  }

  private handleKeyUp(event: KeyboardEvent) {
    this.cast.forEach((a) => a.handleKeyUp?.(event));
  }

  private handleKeyPress(event: KeyboardEvent) {
    this.cast.forEach((a) => a.handleKeyPress?.(event));
  }

  private initializeListeners() {
    this.handleMouse = this.handleMouse.bind(this);
    document.addEventListener("mousemove", this.handleMouse);

    this.handleKeyDown = this.handleKeyDown.bind(this);
    document.addEventListener("keydown", this.handleKeyDown);

    this.handleKeyUp = this.handleKeyUp.bind(this);
    document.addEventListener("keyup", this.handleKeyUp);

    this.handleKeyPress = this.handleKeyPress.bind(this);
    document.addEventListener("keypress", this.handleKeyPress);
  }

  /**
   * One frame of animation. i.e. Our follow step event
   * @param {DOMHighResTimeStamp} timestamp  A number indicating the end time of the previous frame's rendering (based on the number of milliseconds since time origin). The timestamp is a decimal number, in milliseconds, but with a minimal precision of 1 millisecond
   */
  private step(timestamp: DOMHighResTimeStamp) {
    if (this.paused) return;
    if (!this.previous) this.previous = timestamp;
    const elapsed = timestamp - this.previous;
    this.update(elapsed / 1000);
    this.draw();
    this.previous = timestamp;
    window.requestAnimationFrame((t) => this.step(t));
  }

  private update(elapsed: number) {
    this.cast.forEach((a) => a.update(elapsed));
  }

  private draw() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.cast.forEach((a) => a.draw(this.ctx));
  }
}
