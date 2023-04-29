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

    it('should get all the incomes', () => {
        const wallet = new Wallet()
        const incomeX = {
            value: 5031,
            createdAt: new Date(),
            getValue: () => 50.31
        }
        const incomeY = {
            value: 8000,
            createdAt: new Date(),
            getValue: () => 80
        }
        wallet.addTransaction(incomeX)
        wallet.addTransaction(incomeY)

        const incomes = wallet.getAllIncomes()

        expect(incomes.total).toBe(80 + 50.31)
        expect(incomes.list).toContain(incomeX, incomeY)
    })

    it('should get all the incomes and no expenses', () => {
        const wallet = new Wallet()
        const income = {
            value: 5031,
            createdAt: new Date(),
            getValue: () => 50.31
        }
        const expense = {
            value: -4000,
            createdAt: new Date(),
            getValue: () => -40
        }
        wallet.addTransaction(income)
        wallet.addTransaction(expense)

        const incomes = wallet.getAllIncomes()

        expect(incomes.total).toBe(50.31)
        expect(incomes.list).toContain(income)
        expect(incomes.list).not.toContain(expense)
    })
})