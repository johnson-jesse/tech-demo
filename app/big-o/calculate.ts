export function calculateOperations(algorithm: string, n: number) {
  switch (algorithm) {
    case "O(1)":
      return 1;

    case "O(log n)":
      return Math.log2(n);

    case "O(n)":
      return n;

    case "O(n log n)":
      return n * Math.log2(n);

    case "O(n²)":
      return n * n;

    case "O(2ⁿ)":
      return formatOperations(Math.pow(2, n));

    default:
      return 0;
  }
}

export function formatOperations(value: number) {
  if (value < 1_000_000) {
    return value.toLocaleString();
  }

  return value.toExponential(2);
}