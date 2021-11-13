const getDuplicateCssSelectors = require('..')
const FIXTURE = getDuplicateCssSelectors('./test/test.css')

test('should export function', () => {
    expect(getDuplicateCssSelectors).toBeDefined()
    expect(typeof getDuplicateCssSelectors).toBe('function')
})

test('find dublicate selector', () => {
    expect(FIXTURE.toString()).toEqual('.u-color-dark,.u-color-success')
})
