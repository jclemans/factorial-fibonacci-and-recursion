var factorial = function(number) {
var result = 1;

  if (number === 0) {
    return 1;
  } else if (number > 0) {
    result = number * (factorial(number - 1));
  } else {
    result = "Please enter a positive integer.";
  };
  return result;
};


var fibonacci = function(number) {
  var fibonacciArray = [];
  var penultimate = 0;
  var ultimate = 1;
  var result;

  if (number === 1) {
    return 0;
  } else if (number === 2) {
    return 1;
  } else {
    for (var i = 2; i < number; i++) {
      result = ultimate + penultimate;
      fibonacciArray.push(result);
      penultimate = ultimate;
      ultimate = result; 
    };
  };
  return result;
};


$(document).ready(function(){
  $("#factorial").submit(function(event){
    var number = $("#factorialInput").val();
    var result = factorial(number);
    
    $("#factorialResult p").text(result);

    event.preventDefault();    

  });
});
