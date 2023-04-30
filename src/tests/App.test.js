const App = require("../scripts/App");

describe('App class', () => {
    it('should create an app with a user', () => {
        const app = new App('Athena')

        expect(app.user.name).toBe('Athena')
        expect(app.user.wallets.length).toBe(0)
        expect(app.user.money).toBe(0)
    })
})