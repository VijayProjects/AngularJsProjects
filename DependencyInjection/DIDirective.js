//Login Directive
app.directive("ngLogin", function () {
  var directive = {};
  directive.templateUrl = "login.html",
  directive.restrict = "EAC"
  return directive;
});