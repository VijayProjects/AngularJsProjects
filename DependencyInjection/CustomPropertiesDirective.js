app.directive("ngProduct", function () {
  var directive = {};
  directive.template = "<dl><dt>ProductName</dt><dd>{{prod.name}}</dd><dt>Price</dt><dd>{{prod.price}}</dd></dl>"
  directive.restrict = "E";
  directive.scope = {
    product: "=prod"
  }
  return directive;
})