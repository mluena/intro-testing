// const sum = require('./index.js');

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

const fizzbuzz = require('./index.js');
describe('Fizzbuzz', () => {
  test('returns 1 when input is 1', () => {
    const number = 1; 

    const result = fizzbuzz(number);

    expect(result).toBe(1); 
  });
  test('returns 2 when input is 2', () => {
    const number = 2; 

    const result = fizzbuzz(number);

    expect(result).toBe(2); 
  });
  test('returns fizz when input is 27', () => {
    const number = 27; 

    const result = fizzbuzz(number);

    expect(result).toBe('fizz'); 
  });
  test('returns fizz when input is 3', () => {
    const number = 3; 

    const result = fizzbuzz(number);

    expect(result).toBe('fizz'); 
  });
  test('returns fizz when input is 21', () => {
    const number = 3; 

    const result = fizzbuzz(number);

    expect(result).toBe('fizz'); 
  });
  test('returns buzz when input is 5', () => {
    const number = 5; 

    const result = fizzbuzz(number);

    expect(result).toBe('buzz'); 
  });
  test('returns buzz when input is 25', () => {
    const number = 25; 

    const result = fizzbuzz(number);

    expect(result).toBe('buzz'); 
  });
  test('returns fizzbuzz when input is 15', () => {
    const number = 15; 

    const result = fizzbuzz(number);

    expect(result).toBe('fizzbuzz'); 
  });
  test('returns fizzbuzz when input is 30', () => {
    const number = 30; 

    const result = fizzbuzz(number);

    expect(result).toBe('fizzbuzz'); 
  });
});


  