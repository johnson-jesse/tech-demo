import { sigmoid } from "./activation";
import { Matrix } from "./Matrix";

export class NeuralNetwork {
  layers: number[];

  weights: Matrix[];
  biases: Matrix[];

  constructor(layerSizes: number[]) {
    this.layers = layerSizes;

    this.weights = [];
    this.biases = [];

    for (let i = 0; i < layerSizes.length - 1; i++) {
      const rows = layerSizes[i];
      const cols = layerSizes[i + 1];

      const weightMatrix = new Matrix(rows, cols);
      weightMatrix.randomize();

      const biasMatrix = new Matrix(1, cols);
      biasMatrix.randomize();

      this.weights.push(weightMatrix);
      this.biases.push(biasMatrix);
    }
  }

  feedForward(inputArray: number[]): number[] {
    const inputs = Matrix.fromArray(inputArray);

    let current = inputs;

    for (let i = 0; i < this.weights.length; i++) {
      current = current.multiply(this.weights[i]);

      current.map(sigmoid);
    }

    return current.toArray();
  }
}
