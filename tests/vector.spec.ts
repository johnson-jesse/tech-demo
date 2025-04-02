import { Vector } from "@/lib/Vector";
import { test, expect } from "@playwright/test";

test.describe("initialize", () => {
  test("with new", async () => {
    const v = new Vector();
    expect(v).not.toBeUndefined();
  });

  test("with factory Zero", async () => {
    const v = Vector.Zero();
    expect(v).not.toBeUndefined();
  });

  test("with params", async () => {
    const v = new Vector(5, 6);
    expect(v.x).toBe(5);
    expect(v.y).toBe(6);
  });

  test("clone", async () => {
    const v = new Vector(5, 6);
    const actual = v.clone();
    expect(actual.x).toBe(5);
    expect(actual.y).toBe(6);
  });
});

test.describe("mutate", () => {
  test("set function", async () => {
    const v = Vector.Zero();
    v.set(6, 7);
    expect(v.x).toBe(6);
    expect(v.y).toBe(7);
  });

  test("setFrom function", async () => {
    const v = Vector.Zero();
    v.setFrom(new Vector(7, 8));
    expect(v.x).toBe(7);
    expect(v.y).toBe(8);
  });
});

test.describe("math", () => {
  test("add function", async () => {
    const v = new Vector(2, 3);
    v.add(new Vector(1, 1));
    expect(v.x).toBe(3);
    expect(v.y).toBe(4);
  });

  test("subtract function", async () => {
    const v = new Vector(3, 4);
    v.subtract(new Vector(1, 1));
    expect(v.x).toBe(2);
    expect(v.y).toBe(3);
  });

  test("scale function", async () => {
    const v = new Vector(3, 4);
    v.scale(2);
    expect(v.x).toBe(6);
    expect(v.y).toBe(8);
  });
});

test.describe("rotate", () => {
  test("1:0 by 90", async () => {
    const v = new Vector(1, 0);
    v.rotate(90);
    expect(v.x).toBeCloseTo(0);
    expect(v.y).toBeCloseTo(1);
  });

  test("0:1 by 90", async () => {
    const v = new Vector(0, 1);
    v.rotate(90);
    expect(v.x).toBeCloseTo(-1);
    expect(v.y).toBeCloseTo(0);
  });

  test("1:1 by 90", async () => {
    const v = new Vector(1, 1);
    v.rotate(90);
    expect(v.x).toBeCloseTo(-1);
    expect(v.y).toBeCloseTo(1);
  });

  test("2:2 by 90", async () => {
    const v = new Vector(2, 2);
    v.rotate(90);
    expect(v.x).toBeCloseTo(-2);
    expect(v.y).toBeCloseTo(2);
  });

  test("2:2 by 180", async () => {
    const v = new Vector(2, 2);
    v.rotate(180);
    expect(v.x).toBeCloseTo(-2);
    expect(v.y).toBeCloseTo(-2);
  });

  test("6:-7 by 180", async () => {
    const v = new Vector(6, -7);
    v.rotate(180);
    expect(v.x).toBeCloseTo(-6);
    expect(v.y).toBeCloseTo(7);
  });

  test("5:5 by 30", async () => {
    const v = new Vector(5, 5);
    v.rotate(30);
    expect(v.x).toBeCloseTo(1.83);
    expect(v.y).toBeCloseTo(6.83);
  });
});

test.describe("normalize unit values unchanged", () => {
  test("1:0", async () => {
    const v = new Vector(1, 0);
    v.normalize();
    expect(v.x).toBe(1);
    expect(v.y).toBe(0);
  });

  test("0:1", async () => {
    const v = new Vector(0, 1);
    v.normalize();
    expect(v.x).toBe(0);
    expect(v.y).toBe(1);
  });

  test("-1:0", async () => {
    const v = new Vector(-1, 0);
    v.normalize();
    expect(v.x).toBe(-1);
    expect(v.y).toBe(0);
  });

  test("0:-1", async () => {
    const v = new Vector(0, -1);
    v.normalize();
    expect(v.x).toBe(0);
    expect(v.y).toBe(-1);
  });
});

test.describe("normalize diagnal values", () => {
  test("1:1", async () => {
    const v = new Vector(1, 1);
    v.normalize();
    expect(v.x).toBeCloseTo(0.7071);
    expect(v.y).toBeCloseTo(0.7071);
  });

  test("-1:1", async () => {
    const v = new Vector(-1, 1);
    v.normalize();
    expect(v.x).toBeCloseTo(-0.7071);
    expect(v.y).toBeCloseTo(0.7071);
  });

  test("1:-1", async () => {
    const v = new Vector(1, -1);
    v.normalize();
    expect(v.x).toBeCloseTo(0.7071);
    expect(v.y).toBeCloseTo(-0.7071);
  });

  test("-1:-1", async () => {
    const v = new Vector(-1, -1);
    v.normalize();
    expect(v.x).toBeCloseTo(-0.7071);
    expect(v.y).toBeCloseTo(-0.7071);
  });
});

test.describe("normalize arbitrary values", () => {
  test("5:0", async () => {
    const v = new Vector(5, 0);
    v.normalize();
    expect(v.x).toBe(1);
    expect(v.y).toBe(0);
  });

  test("0:-3", async () => {
    const v = new Vector(0, -3);
    v.normalize();
    expect(v.x).toBe(0);
    expect(v.y).toBe(-1);
  });

  test("3:4", async () => {
    const v = new Vector(3, 4);
    v.normalize();
    expect(v.x).toBeCloseTo(0.6);
    expect(v.y).toBeCloseTo(0.8);
  });

  test("8:6", async () => {
    const v = new Vector(8, 6);
    v.normalize();
    expect(v.x).toBeCloseTo(0.8);
    expect(v.y).toBeCloseTo(0.6);
  });

  test("zeros", () => {
    const v = Vector.Zero();
    v.normalize();
    expect(v.x).toBeCloseTo(0);
    expect(v.y).toBeCloseTo(0);
  });
});

test.describe("magnitude", () => {
  test("0:0", async () => {
    const v = new Vector(0, 0);
    const actual = v.magnitude();
    expect(actual).toBe(0);
  });

  test("1:0", async () => {
    const v = new Vector(1, 0);
    const actual = v.magnitude();
    expect(actual).toBe(1);
  });

  test("0:1", async () => {
    const v = new Vector(0, 1);
    const actual = v.magnitude();
    expect(actual).toBe(1);
  });

  test("-1:0", async () => {
    const v = new Vector(-1, 0);
    const actual = v.magnitude();
    expect(actual).toBe(1);
  });

  test("0:-1", async () => {
    const v = new Vector(0, -1);
    const actual = v.magnitude();
    expect(actual).toBe(1);
  });

  test("1:1", async () => {
    const v = new Vector(1, 1);
    const actual = v.magnitude();
    expect(actual).toBeCloseTo(1.4142);
  });

  test("-1:1", async () => {
    const v = new Vector(-1, 1);
    const actual = v.magnitude();
    expect(actual).toBeCloseTo(1.4142);
  });

  test("1:-1", async () => {
    const v = new Vector(1, -1);
    const actual = v.magnitude();
    expect(actual).toBeCloseTo(1.4142);
  });

  test("-1:-1", async () => {
    const v = new Vector(-1, -1);
    const actual = v.magnitude();
    expect(actual).toBeCloseTo(1.4142);
  });

  test("3:4", async () => {
    const v = new Vector(3, 4);
    const actual = v.magnitude();
    expect(actual).toBe(5);
  });

  test("2:-2", async () => {
    const v = new Vector(2, -2);
    const actual = v.magnitude();
    expect(actual).toBeCloseTo(2.8284);
  });
});

test.describe("distance", () => {
  test("zeros", async () => {
    const a = new Vector(0, 0);
    const b = new Vector(0, 0);
    const actual = a.distance(b);
    expect(actual).toBe(0);
  });

  test("threes", async () => {
    const a = new Vector(3, 3);
    const b = new Vector(3, 3);
    const actual = a.distance(b);
    expect(actual).toBe(0);
  });

  test("0:0 & 5:0", async () => {
    const a = new Vector(0, 0);
    const b = new Vector(5, 0);
    const actual = a.distance(b);
    expect(actual).toBe(5);
  });

  test("-4:0 & -2:0", async () => {
    const a = new Vector(-4, 0);
    const b = new Vector(2, 0);
    const actual = a.distance(b);
    expect(actual).toBe(6);
  });

  test("1:1 & 4:5", async () => {
    const a = new Vector(1, 1);
    const b = new Vector(4, 5);
    const actual = a.distance(b);
    expect(actual).toBe(5);
  });

  test("2:1 & 5:5", async () => {
    const a = new Vector(2, 1);
    const b = new Vector(5, 5);
    const actual = a.distance(b);
    expect(actual).toBe(5);
  });

  test("5:-5 & -5:5", async () => {
    const a = new Vector(5, -5);
    const b = new Vector(-5, 5);
    const actual = a.distance(b);
    expect(actual).toBeCloseTo(14.1421);
  });
});

test.describe("direction", () => {
  test("direction zeros", async () => {
    const a = new Vector(0, 0);
    const b = new Vector(0, 0);
    const actual = a.direction(b);
    expect(actual.x).toBe(0);
    expect(actual.y).toBe(0);
  });

  test("direction 0:0 & 5:0", async () => {
    const a = new Vector(0, 0);
    const b = new Vector(5, 0);
    const actual = a.direction(b);
    expect(actual.x).toBe(1);
    expect(actual.y).toBe(0);
  });

  test("direction 0:7 & 0:0", async () => {
    const a = new Vector(0, 7);
    const b = new Vector(0, 0);
    const actual = a.direction(b);
    expect(actual.x).toBe(0);
    expect(actual.y).toBe(-1);
  });

  test("direction diagonal 1:1 & 0:0", async () => {
    const a = new Vector(1, 1);
    const b = new Vector(0, 0);
    const actual = a.direction(b);
    expect(actual.x).toBeCloseTo(-0.7071);
    expect(actual.y).toBeCloseTo(-0.7071);
  });

  test("direction diagonal 3:4 & 6:8", async () => {
    const a = new Vector(3, 4);
    const b = new Vector(6, 8);
    const actual = a.direction(b);
    expect(actual.x).toBe(0.6);
    expect(actual.y).toBe(0.8);
  });
});

test.describe("limit", () => {
  test("limit below max 0:1 @2", async () => {
    const v = new Vector(0, 1);
    const actual = v.limit(2);
    expect(actual.x).toBe(0);
    expect(actual.y).toBe(1);
  });

  test("limit below max 3:4 @6", async () => {
    const v = new Vector(3, 4);
    const actual = v.limit(6);
    expect(actual.x).toBe(3);
    expect(actual.y).toBe(4);
  });

  test("limit at max 6:8 @5", async () => {
    const v = new Vector(6, 8);
    const actual = v.limit(5);
    expect(actual.x).toBeCloseTo(3);
    expect(actual.y).toBeCloseTo(4);
  });
});

test.describe("setMagnitude", () => {
  test("setMagnitude above max 6:8 @5", async () => {
    const v = new Vector(6, 8);
    const actual = v.setMagnitude(5);
    expect(actual.x).toBeCloseTo(3);
    expect(actual.y).toBeCloseTo(4);
  });

  test("setMagnitude above max 0.01:0.01 @5", async () => {
    const v = new Vector(0.01, 0.01);
    const actual = v.setMagnitude(5);
    expect(actual.x).toBeCloseTo(3.5355);
    expect(actual.y).toBeCloseTo(3.5355);
  });
});
