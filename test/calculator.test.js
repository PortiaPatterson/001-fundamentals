const calculator = require('../app/calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('subtracts 3 - 2 to equal 1', () => {
  expect(calculator.subtract(3, 2)).toBe(1);
});

test('multiply 3 * 2 to equal 6', () => {
  expect(calculator.multiply(3, 2)).toBe(6);
});

test('isOdd 3 % 2 to equal 1', () => {
  expect(calculator.isOdd(3)).toBe(true);
});

test('divisibleBy 4 % 2 has no remainder', () => {
  expect(calculator.divisibleBy(4, 2)).toBe(true);
});
test('checkNumberSize 10 > 2 should show 10 is bigger than 2', () => {
  expect(calculator.divisibleBy(4, 2)).toBe(true);
});
