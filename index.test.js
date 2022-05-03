const sum = require('./index.js')

test("adds two numbers", () => {
    expect(sum(1, 2)).toBe(3)
})