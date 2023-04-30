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
            value: -1299,
            createdAt: new Date(),
            getValue: () => -12.99
        }
        wallet.addTransaction(income)
        wallet.addTransaction(expense)

        const incomes = wallet.getAllIncomes()

        expect(incomes.total).toBe(50.31)
        expect(incomes.list).toContain(income)
        expect(incomes.list).not.toContain(expense)
    })

    it('should not include incomes created before start date', () => {
        const wallet = new Wallet()
        const startDate = new Date('2022-01-01')
        const incomeBeforeStartDate = {
            value: 5031,
            createdAt: new Date(startDate.getTime() - 1),
            getValue: () => 50.31
        }
        const incomeAfterStartDate = {
            value: 8000,
            createdAt: new Date(startDate.getTime() + 1),
            getValue: () => 80
        }
        wallet.addTransaction(incomeAfterStartDate)
        wallet.addTransaction(incomeBeforeStartDate)

        const incomes = wallet.getAllIncomes(startDate)

        expect(incomes.total).toBe(80)
        expect(incomes.list).toContain(incomeAfterStartDate)
        expect(incomes.list).not.toContain(incomeBeforeStartDate)
    })

    it('should not include incomes created after end date', () => {
        const wallet = new Wallet()
        const startDate = new Date('2022-01-01')
        const endDate = new Date('2022-01-31')
        const incomeBeforeEndDate = {
            value: 5031,
            createdAt: new Date(endDate.getTime() - 1),
            getValue: () => 50.31
        }
        const incomeAfterEndDate = {
            value: 8000,
            createdAt: new Date(endDate.getTime() + 1),
            getValue: () => 80
        }
        wallet.addTransaction(incomeBeforeEndDate)
        wallet.addTransaction(incomeAfterEndDate)

        const incomes = wallet.getAllIncomes(startDate, endDate)

        expect(incomes.total).toBe(50.31)
        expect(incomes.list).toContain(incomeBeforeEndDate)
        expect(incomes.list).not.toContain(incomeAfterEndDate)
    })

    it('should get the all expenses', () => {
        const wallet = new Wallet()
        const expenseA = {
            value: -3500,
            createdAt: new Date(),
            getValue: () => -35
        }
        const expenseB = {
            value: -1299,
            createdAt: new Date(),
            getValue: () => -12.99
        }
        wallet.addTransaction(expenseA)
        wallet.addTransaction(expenseB)

        const expenses = wallet.getAllExpenses()

        expect(expenses.total).toBe(47.99)
        expect(expenses.list).toContain(expenseA)
        expect(expenses.list).toContain(expenseB)
    })

    it('should get the all expenses and no incomes', () => {
        const wallet = new Wallet()
        const income = {
            value: 5031,
            createdAt: new Date(),
            getValue: () => 50.31
        }
        const expense = {
            value: -1299,
            createdAt: new Date(),
            getValue: () => -12.99
        }
        wallet.addTransaction(income)
        wallet.addTransaction(expense)

        const expenses = wallet.getAllExpenses()

        expect(expenses.total).toBe(12.99)
        expect(expenses.list).toContain(expense)
        expect(expenses.list).not.toContain(income)
    })

    it('should not include expenses created before start date', () => {
        const wallet = new Wallet()
        const startDate = new Date('2022-01-01')
        const expenseBeforeStartDate = {
            value: -3500,
            createdAt: new Date(startDate.getTime() - 1),
            getValue: () => -35
        }
        const expenseAfterStartDate = {
            value: -1299,
            createdAt: new Date(startDate.getTime() + 1),
            getValue: () => -12.99
        }
        wallet.addTransaction(expenseBeforeStartDate)
        wallet.addTransaction(expenseAfterStartDate)

        const expenses = wallet.getAllExpenses(startDate)

        expect(expenses.total).toBe(12.99)
        expect(expenses.list).not.toContain(expenseBeforeStartDate)
        expect(expenses.list).toContain(expenseAfterStartDate)
    })

    it('should not include expenses created after end date', () => {
        const wallet = new Wallet()
        const startDate = new Date('2022-01-01')
        const endDate = new Date('2022-01-31')
        const expenseBeforeEndDate = {
            value: -3500,
            createdAt: new Date(endDate.getTime() - 1),
            getValue: () => -35
        }
        const expenseAfterEndDate = {
            value: -1299,
            createdAt: new Date(endDate.getTime() + 1),
            getValue: () => -12.99
        }
        wallet.addTransaction(expenseBeforeEndDate)
        wallet.addTransaction(expenseAfterEndDate)

        const expenses = wallet.getAllExpenses(startDate, endDate)

        expect(expenses.total).toBe(35)
        expect(expenses.list).toContain(expenseBeforeEndDate)
        expect(expenses.list).not.toContain(expenseAfterEndDate)
    })
})