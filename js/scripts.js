var factorial = function(number) {
var result = 1;

  if (number === 0) {
    return 1;
  } else if (number > 0) {
    for (var n = number; n > 0; n--) {
      result *= n;
    }
  } else {
    result = "Please enter a positive integer.";
  };
  return result;
};
