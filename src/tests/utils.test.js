const { isValidDecimal } = require("../scripts/utils.js")

describe('utils.js', () => {
    it('should return true if number is an integer', () => {
        expect(isValidDecimal(42)).toBe(true)
    })
})

