export class Matrix {
  private data: number[][];

  constructor(
    private rows: number,
    private cols: number,
  ) {
    this.rows = rows;
    this.cols = cols;

    this.data = [];

    for (let i = 0; i < rows; i++) {
      this.data[i] = [];

      for (let j = 0; j < cols; j++) {
        this.data[i][j] = 0;
      }
    }
  }

  multiply(other: Matrix): Matrix {
    if (this.cols !== other.rows) {
      throw new Error(
        `Cannot multiply ${this.rows}x${this.cols} by ${other.rows}x${other.cols}`,
      );
    }

    const result = new Matrix(this.rows, other.cols);

    for (let i = 0; i < result.rows; i++) {
      for (let j = 0; j < result.cols; j++) {
        let sum = 0;

        for (let k = 0; k < this.cols; k++) {
          sum += this.data[i][k] * other.data[k][j];
        }

        result.data[i][j] = sum;
      }
    }

    return result;
  }

  copy(): Matrix {
    const result = new Matrix(this.rows, this.cols);

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        result.data[i][j] = this.data[i][j];
      }
    }

    return result;
  }

  randomize() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.data[i][j] = Math.random() * 2 - 1;
      }
    }
  }

  static fromArray(values: number[]): Matrix {
    const matrix = new Matrix(1, values.length);

    for (let i = 0; i < values.length; i++) {
      matrix.set(0, i, values[i]);
    }

    return matrix;
  }

  map(func: (num: number) => number) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.data[i][j] = func(this.data[i][j]);
      }
    }
  }

  print() {
    console.table(this.data);
  }

  get(row: number, col: number): number {
    return this.data[row][col];
  }

  set(row: number, col: number, value: number): void {
    this.data[row][col] = value;
  }

  toArray(): number[] {
    if (this.rows !== 1) {
      throw new Error("Matrix must have exactly one row.");
    }

    return [...this.data[0]];
  }
}
