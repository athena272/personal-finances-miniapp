const App = require("../src/scripts/App")

describe('App integration', () => {
    let app

    beforeEach(() => {
        app = new App()
    })

    it('should add a new wallet to a user', () => {

        app.addWallet('My wallet')

        expect(app.user.wallets.length).toBe(1)
        expect(app.user.wallets[0].getBalance()).toBe(0)
    })

    it('should be able to buy', () => {
        app.addWallet('My wallet')
        const pizza = {
            label: 'Pizza',
            value: 38,
            walletName: 'My wallet'
        }

        app.buy(pizza)

        expect(app.user.money).toBe(-38)
        expect(app.user.wallets[0].getBalance()).toBe(-38)
        expect(app.user.wallets[0].transactions.length).toBe(1)
        expect(app.user.wallets[0].transactions[0].label).toBe('Pizza')
        expect(app.user.wallets[0].transactions[0].getValue()).toBe(-38)
    })
})