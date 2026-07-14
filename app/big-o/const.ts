export type Algorithm = {
  id: string;
  complexity: string;
  title: string;
  description: string;
  code: string;
  operations: (n: number) => number;
};

export const algorithms: Algorithm[] = [
  {
    id: "constant",
    complexity: "O(1)",
    title: "Constant Time",
    description:
      "The amount of work never changes, regardless of the input size. Accessing an array by index always takes one operation.",

    code: `const numbers = [10, 20, 30, 40, 50];

const value = numbers[2];

console.log(value);`,

    operations: () => 1,
  },

  {
    id: "logarithmic",
    complexity: "O(log n)",
    title: "Logarithmic Time",
    description:
      "The search space is cut roughly in half on each iteration. Binary search is the classic example.",

    code: `function binarySearch(numbers: number[], target: number) {
  let left = 0;
  let right = numbers.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (numbers[middle] === target) {
      return middle;
    }

    if (numbers[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return -1;
}`,

    operations: (n) => Math.max(1, Math.log2(n)),
  },

  {
    id: "linear",
    complexity: "O(n)",
    title: "Linear Time",
    description:
      "Each element is visited once. If the input doubles, the work roughly doubles.",

    code: `function contains(numbers: number[], target: number) {
  for (const number of numbers) {
    if (number === target) {
      return true;
    }
  }

  return false;
}`,

    operations: (n) => n,
  },

  {
    id: "linearithmic",
    complexity: "O(n log n)",
    title: "Linearithmic Time",
    description:
      "Algorithms like Merge Sort repeatedly divide the data before merging it back together efficiently.",

    code: `function mergeSort(numbers: number[]): number[] {
  if (numbers.length <= 1) {
    return numbers;
  }

  const middle = Math.floor(numbers.length / 2);

  const left = mergeSort(numbers.slice(0, middle));
  const right = mergeSort(numbers.slice(middle));

  return merge(left, right);
}`,

    operations: (n) => n * Math.max(1, Math.log2(n)),
  },

  {
    id: "quadratic",
    complexity: "O(n²)",
    title: "Quadratic Time",
    description:
      "Each item is compared against every other item. Nested loops commonly produce quadratic complexity.",

    code: `for (const first of numbers) {
  for (const second of numbers) {
    console.log(first, second);
  }
}`,

    operations: (n) => n * n,
  },

  {
    id: "exponential",
    complexity: "O(2ⁿ)",
    title: "Exponential Time",
    description:
      "The amount of work doubles with every additional input. A simple recursive Fibonacci is a classic example.",

    code: `function fibonacci(n: number): number {
  if (n <= 1) {
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}`,

    operations: (n) => Math.pow(2, n),
  },
];
