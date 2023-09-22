const validate = require('./validate');

test('1', () => {
    expect(validate(123, 'password', 'password')).toBe(false);
})

test('2', () => {
    expect(validate('not_email', 'password', 'password')).toBe(false);
})

test('3', () => {
    expect(validate('mail@gmail.com', 1234567, 1234567)).toBe(false);
})

test('4', () => {
    expect(validate('mail@gmail.com', 'pass', 'pass')).toBe(false);
})

test('5', () => {
    expect(validate('mail@gmail.com', 'password', 'not_pass')).toBe(false);
})

test('6', () => {
    expect(validate('mail@gmail.com', 'password', 'password')).toBe(true);
})
