//create CaptchaFactory
app.factory("RandomCodeGenerator", function() {
  var factory = {};
  factory.generateCode = () => {
    var a = Math.round((Math.random() * 10));
    var b = Math.round((Math.random() * 10));
    var c = Math.round((Math.random() * 10));
    var d = Math.round((Math.random() * 10));
    var e = Math.round((Math.random() * 10));
    var f = Math.round((Math.random() * 10));
    return a+" "+b+" "+c+" "+d+" "+e+" "+f;
  }
  return factory;
});

//captch Service
app.service("CaptchaService", function(RandomCodeGenerator) {
  this.catpchaCode = () => RandomCodeGenerator.generateCode();
  
});