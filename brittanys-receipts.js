const TAX_BY_PROVINCE = {
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
  let _province = TAX_BY_PROVINCE[province];

  let actualTax = price * (_province.tax / 100);
  let total = price + actualTax;
  return {
    actualTax,
    total,
    price,
    province,
  };
};

module.exports = {
  taxCalculator,
};

// const result = taxCalculator(42.98, province["bc"]);
// logger(result.actualTax, result.total, result.price, result.province.location);
