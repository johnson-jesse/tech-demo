export class Matrix {
  private data: number[][];

  constructor(
    private readonly rows: number,
    private readonly cols: number,
  ) {
    this.rows = rows;
    this.cols = cols;

    this.data = [];

    for (let r = 0; r < rows; r++) {
      this.data[r] = [];

      for (let c = 0; c < cols; c++) {
        this.data[r][c] = 0;
      }
    }
  }

  public static fromArray(values: number[]): Matrix {
    // Column vector
    const matrix = new Matrix(values.length, 1);

    values.forEach((value, row) => {
      matrix.set(row, 0, value);
    });

    return matrix;
  }

  public toArray(): number[] {
    if (this.cols !== 1) {
      throw new Error("Only column vectors can be converted to an array.");
    }

    const values: number[] = [];

    for (let r = 0; r < this.rows; r++) {
      values.push(this.get(r, 0));
    }

    return values;
  }

  public get(row: number, col: number): number {
    return this.data[row][col];
  }

  public set(row: number, col: number, value: number): void {
    this.data[row][col] = value;
  }

  public copy(): Matrix {
    const result = new Matrix(this.rows, this.cols);

    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.cols; c++) {
        result.set(r, c, this.get(r, c));
      }
    }

    return result;
  }

  public randomize(min = -1, max = 1): Matrix {
    const range = max - min;

    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.cols; c++) {
        this.set(r, c, min + Math.random() * range);
      }
    }

    return this;
  }

  public map(func: (value: number) => number): Matrix {
    const result = new Matrix(this.rows, this.cols);

    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.cols; c++) {
        result.set(r, c, func(this.get(r, c)));
      }
    }

    return result;
  }

  public add(other: Matrix): Matrix {
    if (this.rows !== other.rows || this.cols !== other.cols) {
      throw new Error("Matrix sizes must match.");
    }

    const result = new Matrix(this.rows, this.cols);

    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.cols; c++) {
        result.set(r, c, this.get(r, c) + other.get(r, c));
      }
    }

    return result;
  }

  public multiply(other: Matrix): Matrix {
    if (this.cols !== other.rows) {
      throw new Error(
        `Cannot multiply ${this.rows}x${this.cols} by ${other.rows}x${other.cols}`,
      );
    }

    const result = new Matrix(this.rows, other.cols);

    for (let r = 0; r < result.rows; r++) {
      for (let c = 0; c < result.cols; c++) {
        let sum = 0;

        for (let k = 0; k < this.cols; k++) {
          sum += this.get(r, k) * other.get(k, c);
        }

        result.set(r, c, sum);
      }
    }

    return result;
  }

  public print(): void {
    console.table(this.data);
  }

  public toJSON(): number[][] {
    const result: number[][] = [];

    for (let r = 0; r < this.rows; r++) {
      result[r] = [];

      for (let c = 0; c < this.cols; c++) {
        result[r][c] = this.get(r, c);
      }
    }

    return result;
  }
}
