import { NeuralNetwork } from "./neural-network";

export default function Page() {
  const brain = new NeuralNetwork([2, 2, 1]);
  const result = brain.feedForward([1, 0]);
  console.log(result);

  return <>Matrix</>;
}
