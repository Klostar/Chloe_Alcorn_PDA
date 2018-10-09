var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  });


  it('should update displays previous result after pressing equals', function() {
      running_total = element(by.css('#running_total'));
      element(by.css('#number1')).click();
      element(by.css('#operator_add')).click();
      element(by.css('#number1')).click();
      element(by.css('#operator_equals')).click();
      expect(running_total.getAttribute('value')).to.eventually.equal('2');
    });

    it('should chain operations together', function() {
    running_total = element(by.css('#running_total'));
    element(by.css('#number1')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number1')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number5')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('10');
});

it('should display negative numbers', function() {
    running_total = element(by.css('#running_total'));
    element(by.css('#number1')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('-1');
  });

  it('should display decimals', function() {
   running_total = element(by.css('#running_total'));
   element(by.css('#number1')).click();
   element(by.css('#operator_divide')).click();
   element(by.css('#number2')).click();
   element(by.css('#operator_equals')).click();
   expect(running_total.getAttribute('value')).to.eventually.equal('0.5');
 });

 it('should display Infinity when divided by zero', function(){
   running_total = element(by.css('#running_total'));
   element(by.css('#number1')).click();
   element(by.css('#operator_divide')).click();
   element(by.css('#number0')).click();
   element(by.css('#operator_equals')).click();
   expect(running_total.getAttribute('value')).to.eventually.equal('Infinity');
 });

//   - Do the number buttons work to update the display of the running total?
//   - Do each of the arithmetical operations work to update the display with the result of the operation? add, subtract , multiply,divide
//   - Can we chain multiple operations together?
//   - Does it work as expected for a range of numbers? (positive, negative, decimals, very large numbers)
//
// What does the code do in exceptional circumstances?
//
//   - If you divide by zero, what is the effect?
//   - Can you write a test to describe what you'd prefer to happen, and then correct the code to make that test pass.
//
//
//

});
