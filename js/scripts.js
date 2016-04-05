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

var memo = [0,1]
var fibonacci = function(number) {
  if(memo[number] != undefined) {
    return memo[number]
  } else {  
    memo[number] = (fibonacci(number - 1) + fibonacci(number -2))
  }
  return memo[number]
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
