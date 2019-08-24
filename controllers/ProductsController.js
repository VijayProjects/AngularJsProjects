app.controller("ProductsController", function($scope, $routeParams) {
  //products
  $scope.products = [
    {id:1, name:'Samsung TV', price:45000.77, photo:'Images/tv1.jpg'},
    {id:2, name:'Mobile', price:45000.77, photo:'Images/mobile1.jpg'},
    {id:3, name:'Nike Casulas', price:4500.77, photo:'Images/shoe2.jpg'},
    {id:4, name:'Lee Cooper Boot', price:3000.77, photo:'Images/shoe3.jpg'}
  ];
  $scope.params = $routeParams;
});