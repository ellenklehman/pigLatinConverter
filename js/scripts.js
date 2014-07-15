var piggyProgram = function(oinkPlease) {
  var oinkPleaseArray = oinkPlease.toLowerCase().split(" ");
  var vowels = ["a","e","i","o","u"];
  var exceptionQ = "q";
  var exceptionY = "y";
  var resultingSentence =[/*array for words once they have been altered*/];

oinkPleaseArray.forEach(function(wordtoCheck) { /*runs through each word of the string*/
  for (var i=0; i<wordtoCheck.length; i++) {

    if ((wordtoCheck.charAt(0) === exceptionQ) && (wordtoCheck.charAt(1) === vowels[4])) {
      wordtoCheck = wordtoCheck.slice(2) + wordtoCheck.charAt(0) + wordtoCheck.charAt(1);
    }

    if (vowels.indexOf(wordtoCheck.charAt(0)) === -1) {
      wordtoCheck = wordtoCheck.slice(1) + wordtoCheck.charAt(0);
    }
    if (wordtoCheck.charAt(0) === exceptionY) {
      break;
    }
   }

  console.log(wordtoCheck + "ay");

  resultingSentence.push(wordtoCheck +"ay");
});
 return resultingSentence.join(" ");
};

$(document).ready(function () {
  $("form#piggy-input").submit(function (event) {
    var userInputSentence = $("input#text").val();
    var outcomeText = piggyProgram(userInputSentence);
    $("#result-text").text(outcomeText);

    event.preventDefault();
  });
});
