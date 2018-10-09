var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('it should add', function() {
    calculator.previousTotal = 2;
    calculator.add(2);
    const actual = calculator.runningTotal;
    assert.equal(actual, 4);
  });

  it('should subtract', function() {
  calculator.previousTotal = 4;
  calculator.subtract(3);
  const actual = calculator.runningTotal;
  assert.equal(actual , 1);
});

  it('should multiply', function() {
  calculator.previousTotal = 4;
  calculator.multiply(4);
  const actual = calculator.runningTotal;
  assert.equal(actual, 16);

});

it('should divide', function () {
  calculator.previousTotal = 16;
  calculator.divide(2);
  const actual = calculator.runningTotal;
  assert.equal(actual,8)

});

it('should clear', function () {
  calculator.numberClick();
  calculator.clearClick();
  const actual = calculator.runningTotal;
  assert.equal(actual, 0)
});

it('should click operators', function () {
  calculator.operatorClick('*');
  const actual = calculator.previousOperator;
  assert.equal(actual, '*')
});

it('should add 3+3 and get 6', function () {
  calculator.numberClick(3);
  calculator.operatorClick('+');
  calculator.numberClick(3);
  calculator.operatorClick('=')
  const actual = calculator.previousTotal;
  assert.equal(actual, 6);
});

it('should subtract 5-2 and get 3', function () {
  calculator.numberClick(5);
  calculator.operatorClick('-');
  calculator.numberClick(2);
  calculator.operatorClick('=');
  const actual = calculator.previousTotal;
  assert.equal(actual,3);
});

it('should multiply 9*9 and get 81', function () {
  calculator.numberClick(9);
  calculator.operatorClick('*');
  calculator.numberClick(9);
  calculator.operatorClick('=');
  const actual = calculator.previousTotal;
  assert.equal(actual,81);
});

it('should divide 20/2 and get 10', function () {
  calculator.numberClick(20);
  calculator.operatorClick('/');
  calculator.numberClick(2);
  calculator.operatorClick('=');
  const actual = calculator.previousTotal;
  assert.equal(actual,10);
});

it('should chain multiple operations together', function () {
  calculator.numberClick(20);
  calculator.operatorClick('+');
  calculator.numberClick(20);
  calculator.operatorClick('-');
  calculator.numberClick(30);
  calculator.operatorClick('*');
  calculator.numberClick(2);
  calculator.operatorClick('/');
  calculator.numberClick(5);
  calculator.operatorClick('=');
  const actual = calculator.previousTotal;
  assert.equal(actual, 4);
});

it('should handle negative numbers', function () {
  calculator.numberClick(-20);
  calculator.operatorClick('+');
  calculator.numberClick(10);
  calculator.operatorClick('=');
  const actual = calculator.previousTotal;
  assert.equal(actual, -10);
});

it('should handle decimals', function () {
  calculator.numberClick(1.5);
  calculator.operatorClick('+');
  calculator.numberClick(1.5);
  calculator.operatorClick('=');
  const actual = calculator.previousTotal;
  assert.equal(actual,3);
});


it('should handle big numbers', function () {
  calculator.numberClick(1000);
  calculator.operatorClick('+');
  calculator.numberClick(1000);
  calculator.operatorClick('=');
  const actual = calculator.previousTotal;
  assert.equal(actual,2000);
});

it('should handle very big numbers', function () {
  calculator.numberClick(1000000);
  calculator.operatorClick('+');
  calculator.numberClick(1000000);
  calculator.operatorClick('=');
  const actual = calculator.previousTotal;
  assert.equal(actual,2000000);
});



});
