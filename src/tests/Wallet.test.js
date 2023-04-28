const Wallet = require("../scripts/Wallet")

describe('Wallet class', () => {
    it('should create an empty wallet with balance 0', () => {
        const wallet = new Wallet()

        expect(wallet.balance).toBe(0)
        // expect(wallet.balance).not.toBeGreaterThan(0)
    })

    it('should create an empty wallet with no transactions', () => {
        const wallet = new Wallet()

        expect(wallet.transactions).toEqual([])
    })

    it('should save a transaction on a wallet', () => {
        const wallet = new Wallet()
        const mockTransaction = 'some transaction'
        wallet.addTransaction(mockTransaction)

        expect(wallet.transactions).toContain(mockTransaction)
    })

    it('should update wallet balance when a transaction is saved', () => {
        const wallet = new Wallet()
        const mockTransaction = { value: 42 }
        wallet.addTransaction(mockTransaction)

        expect(wallet.balance).toBe(42)
    })

    it('should get wallet balance as a number of up to two decimal places', () => {
        const wallet = new Wallet()
        const mockTransaction = { value: 4219 }
        wallet.addTransaction(mockTransaction)

        expect(wallet.getBalance()).toBe(42.19)
    })
})