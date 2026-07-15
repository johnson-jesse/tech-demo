import { Matrix } from "./Matrix";

export class Layer {
  readonly inputCount: number;
  readonly neuronCount: number;

  readonly weights: Matrix;
  readonly biases: Matrix;

  inputs: Matrix | null = null;
  outputs: Matrix | null = null;
  weightedSums: Matrix | null = null;

  constructor(inputCount: number, neuronCount: number) {
    this.inputCount = inputCount;
    this.neuronCount = neuronCount;

    this.weights = new Matrix(neuronCount, inputCount).randomize();

    this.biases = new Matrix(neuronCount, 1).randomize();
  }

  public inspect() {
    return {
      inputs: this.inputs?.toJSON(),
      weights: this.weights.toJSON(),
      biases: this.biases.toJSON(),
      outputs: this.outputs?.toJSON(),
    };
  }
}
