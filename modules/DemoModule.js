var app = angular.module("DemoApp",['ngRoute']);
//URL's configuration
app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl: 'views/home.html',
    controller: 'HomeController'
  })
  .when("/home", {
    templateUrl: 'views/home.html',
    controller: 'HomeController'
  })
  .when("/about", {
    templateUrl: 'views/about.html',
    controller: 'AboutController'
  })
  .when("/contact", {
    templateUrl: 'views/contact.html',
    controller: 'ContactController'
  })
  .otherwise({
    template:"<h2 style='color:red'>Page is not found</h2>"
  });
});
