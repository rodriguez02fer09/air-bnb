const randomStrings = require('../__test__/index')



describe('probar funcionalidades de randomStrings' , () => {
    test('probar la funcionalidad', () => {
        expect(typeof(randomStrings())).toBe('string')
    })
    test('comprobar que no existe ciudad', () => {
expect(randomStrings()).not.toMatch(/cordoba/)
    })
} )