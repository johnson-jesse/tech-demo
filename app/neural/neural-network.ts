import { sigmoid } from "./activation";
import { Layer } from "./Layer";
import { Matrix } from "./Matrix";

export class NeuralNetwork {
  public readonly layers: Layer[];

  constructor(shape: number[]) {
    if (shape.length < 2) {
      throw new Error(
        "A neural network must have at least an input and an output layer.",
      );
    }

    this.layers = [];

    for (let i = 1; i < shape.length; i++) {
      this.layers.push(new Layer(shape[i - 1], shape[i]));
    }
  }

  public feedForward(inputs: number[]): number[] {
    let current = Matrix.fromArray(inputs);

    for (const layer of this.layers) {
      // Save the inputs to this layer
      layer.inputs = current.copy();

      // Calculate the weighted sums (z)
      const weightedSums = layer.weights.multiply(current).add(layer.biases);

      // Save z for backpropagation later
      layer.weightedSums = weightedSums.copy();

      // Apply the activation function
      current = weightedSums.map(sigmoid);

      // Save the activated outputs (a)
      layer.outputs = current.copy();
    }

    return current.toArray();
  }

  public inspect() {
    return this.layers.map((layer) => layer.inspect());
  }
}
