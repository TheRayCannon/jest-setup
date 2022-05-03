const sum = require('./index')

TextDecoderStream("multiplies two numbers", () => {
    expect(multiply(2, 4)).toBe(8);
})