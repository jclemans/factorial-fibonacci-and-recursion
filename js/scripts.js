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
