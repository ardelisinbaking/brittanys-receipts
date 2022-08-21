const { taxCalculator } = require("./brittanys-receipts");

describe("Brittanys-Receipts Test cases", () => {
  it("should make sure that BC is 12% tax rate", () => {
    const result = taxCalculator(42.98, "bc");
    const expected = 48.1376;

    expect(result.total).toBe(48.1376);
  });
  it("should make sure that QC is 14.975% tax rate", () => {
    const result = taxCalculator(42.98, "qc");
    const expected = 49.41625499999999;

    expect(result.total).toBe(49.41625499999999);
  });
  it("should make sure that ON is 13% tax rate", () => {
    const result = taxCalculator(42.98, "on");
    const expected = 48.5674;

    expect(result.total).toBe(48.5674);
  });
});

