const deneg = require("..");
const isNegativeZero = require("is-negative-zero");

describe("deneg-zero", () => {
  it("turns negative zero into zero", () => {
    const n = -0;
    expect(isNegativeZero(n)).toBeTruthy();
    expect(deneg(n)).toBe(0);
  });

  it("turns positive zero into zero", () => {
    expect(deneg(+0)).toBe(0);
  });

  it("turns negative 0.0 into zero", () => {
    const n = -0.0;
    expect(isNegativeZero(n)).toBeTruthy();
    expect(deneg(n)).toBe(0);
  });

  it("turns positive 0.0 into zero", () => {
    expect(deneg(+0.0)).toBe(0);
  });

  it("leaves a random positive integer the same", () => {
    expect(deneg(42)).toBe(42);
  });

  it("leaves a random negative integer the same", () => {
    expect(deneg(-42)).toBe(-42);
  });
});
