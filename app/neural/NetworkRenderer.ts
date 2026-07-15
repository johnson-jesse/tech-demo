import { NeuralNetwork } from "./neural-network";

export class NetworkRenderer {
  constructor(private ctx: CanvasRenderingContext2D) {}

  draw(network: NeuralNetwork): void {}
}
