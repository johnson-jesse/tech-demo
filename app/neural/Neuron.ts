export class Neuron {
  private weight: number;
  private bias: number;

  constructor() {
    this.weight = Math.random();
    this.bias = Math.random();
  }

  activate(input: number) {
    const sum = input * this.weight + this.bias;
    return 1 / (1 + Math.exp(-sum)); // sigmoid
  }
}
