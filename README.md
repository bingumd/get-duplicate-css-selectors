#get-duplicate-css-selectors

Get duplicate css selectors.

## Installation

##### Yarn

```sh
yarn add get-duplicate-css-selectors
```

##### Npm

```sh
yarn install get-duplicate-css-selectors
```

## :gear: Usage

```css
/* index.css */
.u-color-dark {
    background: var(--color-dark);
}

.u-color-primary {
    background: var(--color-primary);
}

.u-color-dark {
    background: var(--color-light);
}

.u-color-success {
    background: var(--color-success);
}

.u-color-info {
    background: var(--color-info);
}

.u-color-success {
    background: var(--color-danger);
}

```

```js
const getDuplicateCssSelectors = require('getDuplicateCssSelectors')
const CSS = getDuplicateCssSelectors('./index.css')

console.log(CSS.toString()) // .u-color-dark,.u-color-success
```
