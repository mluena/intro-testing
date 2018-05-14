const paddingLeft = require('./paddingLeft.js');
describe('PaddingLeft', () => {
  test('Adds x characters at the beginning', () => {
    const finalString = 'xxhola';

    expect(paddingLeft('hola', 6, 'x')).toBe('xxhola'); 
  });
  test('Returns same string if string length is 3', () => {
    const initialString = 'hola';
    
    const stringLength = 3;

    const character = 'x';

    expect(paddingLeft('hola', 3, 'x')).toBe('hola'); 
  });
  test('Adds xxxxxxxx at the beginnig if string length is 12', () => {
    const initialString = 'hola';
    
    const stringLength = 12;

    const character = 'x';

    expect(paddingLeft('hola', 12, 'x')).toBe('xxxxxxxxhola'); 
  });
});