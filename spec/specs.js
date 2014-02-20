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

