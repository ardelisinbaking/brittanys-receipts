const province = {
  bc: {
    tax: 12,
    location: "BC",
  },
  qc: {
    tax: 14.975,
    location: "Quebec",
  },
  on: {
    tax: 13,
    location: "Ontario",
  },
};

const logger = function (actualTax, total, price, province) {
  console.log(`
  Price: $${price}
  Province: ${province}
  Brittany's Interprovincial Receipt
  Tax: $${actualTax.toFixed(2)}
  Total: $${total.toFixed(2)}
  `);
};
const taxCalculator = function (price, province) {
  let actualTax = price * (province.tax / 100);
  let total = price + actualTax;
  return {
    actualTax,
    total,
    price,
    province,
  };
};

const result = taxCalculator(42.98, province["bc"]);
logger(result.actualTax, result.total, result.price, result.province.location);