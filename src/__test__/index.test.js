const randomStrings = require('../__test__/index.test')


describe('probar funcionalidades de randomStrings', () => {
    test('Probar la funcionalida', () => {
        expect(typeof (randomStrings())).toBe('string')
        })
        test ('comprobar que no existe una ciudad ',( ) => {
expect(randomStrings()).not.toMatch(/cordoba/)

        })
})