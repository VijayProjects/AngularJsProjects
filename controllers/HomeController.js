app.controller("HomeController",function($scope) {
    $scope.title = 'Product Details';
    $scope.products = [
        {Id:1001, Name: 'Samsung Tv', Price: 43550.99},
        {Id:1002, Name: 'Mobile', Price: 13990.99},
        {Id:1003, Name: 'Laptop', Price: 13990.99}
    ];
    $scope.category = function() {
        return 'Eletronics';
    };
});

