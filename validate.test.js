const validate = require('./validate');

test('1', () => {
    expect(validate('name@gmail.com', 'password', 'password')).toBe(true);
})

test('2', () => {
    expect(validate('name@gmail.com', 'password', 'pass')).toBe(false);
})

test('3', () => {
    expect(validate('name@gmail.com', 'pass', 'pass')).toBe(false);
})

test('4', () => {
    expect(validate('name@gmail.com', 'pass', 'password')).toBe(false);
})

test('5', () => {
    expect(validate('name@gmail.com', 123456, 123456)).toBe(false);
})

test('6', () => {
    expect(validate('name@gmail.com', 123465, '123456')).toBe(false);
})

test('7', () => {
    expect(validate('invalid@mail', 'password', 'password')).toBe(false);
})

test('8', () => {
    expect(validate('invalid@mail', 'password', 'pass')).toBe(false);
})

test('9', () => {
    expect(validate('invalid@mail', 'pass', 'pass')).toBe(false);
})

test('10', () => {
    expect(validate('invalid@mail', 'pass', 'password')).toBe(false);
})

test('11', () => {
    expect(validate('invalid@mail', 123456, 123456)).toBe(false);
})

test('12', () => {
    expect(validate('invalid@mail', 123465, '123456')).toBe(false);
})

test('13', () => {
    expect(validate(123321, 'password', 'password')).toBe(false);
})

test('14', () => {
    expect(validate(123321, 'password', 'pass')).toBe(false);
})

test('15', () => {
    expect(validate(123321, 'pass', 'pass')).toBe(false);
})

test('16', () => {
    expect(validate(123321, 'pass', 'password')).toBe(false);
})

test('17', () => {
    expect(validate(123321, 123456, 123456)).toBe(false);
})

test('18', () => {
    expect(validate(123321, 123465, '123456')).toBe(false);
})