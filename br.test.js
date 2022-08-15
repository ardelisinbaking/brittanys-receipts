const { taxCalculator } = require("./brittanys-receipts");

describe("Brittany-Receits Test cases", () => {
  it("should make sure that BC is 12% taxe rate", () => {
    const result = taxCalculator(42.98, "bc");
    const expected = 48.1376;

    expect(result.total).toBe(48.1376);
  });
});
