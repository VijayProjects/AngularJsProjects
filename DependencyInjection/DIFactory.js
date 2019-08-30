app.factory("ProductFactory", function () {
  var factory = {};
  factory.total = (price, qty) => price * qty;
  factory.title = (str) => str.toUpperCase();
  factory.maxValue = (val1, val2) => Math.max(val1, val2);
  return factory;
});