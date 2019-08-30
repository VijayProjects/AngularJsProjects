app.filter("sentancecase", function () {
  return function (str) {
    let firstLetter = str.charAt(0).toUpperCase();
    let restLetters = str.substring(1).toLowerCase();
    return firstLetter+restLetters;
  }
});

//Title Case
app.filter("titlecase", function () {
  return function (str) {
    let splitWords = str.split(' ');
    var titleCase = ''
    for (var word of splitWords) {
      var firstLetter = word.charAt(0).toUpperCase();
      var restLetters = word.substring(1).toLowerCase();
      var newWord = firstLetter+restLetters;
      titleCase = titleCase+newWord+" ";
    }
    return titleCase;
  }
});