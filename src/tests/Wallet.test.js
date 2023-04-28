const Wallet = require("../scripts/Wallet")

describe('Wallet class', () => {
    it('should create an empty wallet with balance 0', () => {
        const wallet = new Wallet()

        expect(wallet.balance).toBe(0)
        // expect(wallet.balance).not.toBeGreaterThan(0)
    })
})