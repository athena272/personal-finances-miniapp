const { isValidDecimal } = require("../scripts/utils.js")

describe('utils.js', () => {
    it('should return true if number is an integer', () => {
        expect(isValidDecimal(42)).toBe(true)
    })

    it('should return true if number has one decimal place', () => {
        expect(isValidDecimal(4.2)).toBe(true)
    })

    it('should return true if number has two decimal places', () => {
        expect(isValidDecimal(4.22)).toBe(true)
    })

    it('should return false for numbers with more than two decimal places', () => {
        expect(isValidDecimal(4.242)).toBe(false)
        expect(isValidDecimal(4.242541515)).toBe(false)
    })
})

