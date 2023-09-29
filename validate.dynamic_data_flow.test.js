const validate = require('./validate');

test('The only test case for dynamic data flow all-c-uses/some-p-uses', () => {
    expect(validate('email@gmail.com', 'password', 'password')).toBe(true);
})
