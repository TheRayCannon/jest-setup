const multiply = require('./index')

test("multiplies two numbers", () => {
    expect(multiply(2, 4)).toBe(8);
})