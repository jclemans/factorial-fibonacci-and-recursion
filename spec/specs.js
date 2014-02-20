describe('factorial', function() {
  it('takes 0 and returns 1', function() {
    factorial(0).should.equal(1);
  });
  it('takes a positive number and returns its factorial.', function() {
    factorial(5).should.equal(120);
  });
  it('takes a negative number and returns an error message.', function() {
    factorial(-1).should.equal("Please enter a positive integer.");
  });
});

describe('fibonacci', function() {
  it('takes 1 and returns 0', function() {
    fibonacci(1).should.equal(0);
  });
  it('takes 2 and return 1', function() {
    fibonacci(2).should.equal(1);
  });
  it('takes an integer greater than 2 and returns the value of the Fibonacci sequence at that number', function() {
    fibonacci(9).should.equal(21);
  });
});  
