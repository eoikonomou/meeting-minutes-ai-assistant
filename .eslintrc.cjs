module.exports = {
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2020,
        sourceType: 'module'
    },
    extends: ['plugin:vue/recommended'],
    ignorePatterns: ['src/utils/analyzer.js'],
    rules: {
        'no-var': ['error'],
        'vue/html-indent': [
            'error',
            4,
            {
                attribute: 1,
                closeBracket: 0,
                switchCase: 0,
                ignores: []
            }
        ],
        'vue/max-attributes-per-line': [
            2,
            {
                singleline: 10,
                multiline: 1
            }
        ],
        'vue/first-attribute-linebreak': [
            2,
            {
                singleline: 'ignore',
                multiline: 'below'
            }
        ],
        indent: ['error', 4],
        'vue/component-name-in-template-casing': ['error', 'kebab-case'],
        'vue/script-indent': ['error', 4, { baseIndent: 1 }],
        'no-useless-escape': 'off',
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'never',
                named: 'never',
                asyncArrow: 'always'
            }
        ],
        semi: [2, 'never'],
        'vue/singleline-html-element-content-newline': 'off',
        'vue/multiline-html-element-content-newline': 'off'
    },
    overrides: [
        {
            files: ['*.vue'],
            rules: {
                indent: 'off'
            }
        }
    ]
}
