module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es6: true,
        mocha: true,
    },
    extends: ['eslint:recommended', 'plugin:prettier/recommended', 'plugin:jest/recommended'],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    },
    plugins: ['prettier', 'jest'],
    parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module',
        ecmaVersion: 2020,
        ecmaFeatures: {
            classes: true,
        },
    },
}
