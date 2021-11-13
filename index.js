const fs = require('fs')
const css = require('css')

module.exports = function getDuplicateCssSelectors(content = '') {
    const selectors = []
    const stylesheet = content.includes('.css') ? fs.readFileSync(content, 'utf8') : content
    const parsed = css.parse(stylesheet)

    parsed.stylesheet.rules.forEach(current => {
        // Ignore non-rule types
        if (current.type !== 'rule') return
        // push selectors
        selectors.push(current.selectors.join(','))
    })

    const findDuplicates = arr => {
        let sortedArr = arr.slice().sort()
        let results = []

        for (let i = 0; i < sortedArr.length - 1; i++) {
            if (sortedArr[i + 1] == sortedArr[i]) {
                results.push(sortedArr[i])
            }
        }

        return results
    }

    return findDuplicates(selectors)
}
