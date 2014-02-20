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
  var result = "";

  if (number < 1) {
    return "Please enter a positive integer. Kthxbye."
  } else if (number === 1) {
    return 0;
  } else if (number === 2) {
    return 1;
  } else {  
    result = (fibonacci(number - 1) + fibonacci(number -2));
  };
  return result;
};


$(document).ready(function() {
  $("#factorial").submit(function(event){
    var number = $("#factorialInput").val();
    var result = factorial(number);
    $("#factorialResult p").text(result);

    event.preventDefault();    
  });

  $("#fibonacci").submit(function(event) {
    var number = $("#fibonacciInput").val();
    var result = fibonacci(number);
    $("#fibonacciResult p").text(result);

    event.preventDefault();
  });

});
