const Transaction = require("../scripts/Transaction")

describe('Transaction class', () => {
    it('should not be able to create a transaction with a non string label', () => {
        const transaction = () => new Transaction(1, 42)

        expect(transaction).toThrow('label must be of type string')
    })

    it('should not be able to create a transaction with a non number value', () => {
        const transaction = () => new Transaction('some transaction', '42')

        expect(transaction).toThrow('value must be of type number')
    })

    it('should not be able to create a transaction with more than two decimal places', () => {
        const invalidTransaction = () => new Transaction('some transaction', 42.4242)
        const validTransaction = () => new Transaction('some transactio', 42.42)

        expect(invalidTransaction).toThrow()
        expect(validTransaction).not.toThrow()
    })

    it('should save the value as an integer', () => {
        // const transaction = () => new Transaction('some transaction', 1.13)
        const transaction = new Transaction('some transaction', 1.13)

        expect(transaction.value).toBe(113)
    })
})