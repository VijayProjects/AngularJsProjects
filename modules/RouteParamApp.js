var app = angular.module("DemoApp", ['ngRoute']);
//configure URL's
app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl:"views/details.html",
    controller:"ProductsController"
  })
  .when("/:id", {
    templateUrl:"views/productPreview.html",
    controller:'ProductsController'
  })
  .otherwise({
    template:"<h2 style='color:red'>Page Not Found</h2>"
  });
});