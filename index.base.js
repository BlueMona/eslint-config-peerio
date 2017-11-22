const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
    extends: [
        'eslint-config-airbnb-base'
    ].map(require.resolve),
    plugins: [],
    settings: {
    },
    rules: {
        'arrow-parens': OFF,
        'arrow-body-style': OFF,
        indent: [ERROR, 4, { SwitchCase: 1, VariableDeclarator: 1 }],
        'one-var-declaration-per-line': OFF,
        'one-var': OFF,
        'no-unused-vars': WARN,
        'comma-dangle': [ERROR, 'never'],
        'prefer-const': WARN,
        'no-use-before-define': [ERROR, { functions: false, classes: true }],
        'no-unused-expressions': [ERROR, { allowShortCircuit: true, allowTernary: true }],
        'no-param-reassign': [ERROR, { props: false }],
        'no-restricted-syntax': OFF,
        'no-extend-native': OFF,
        'no-console': OFF,
        'no-continue': OFF,
        'no-plusplus': OFF,
        'no-bitwise': OFF,
        'class-methods-use-this': OFF,
        'guard-for-in': OFF,
        'max-len': [WARN, 120],
        quotes: [ERROR, 'single', { avoidEscape: true, allowTemplateLiterals: true }],
        semi: [ERROR, 'always'],
        'func-names': OFF,
        'space-before-function-paren': [ERROR, {
            anonymous: 'never',
            named: 'never',
            asyncArrow: 'always'
        }],
        'no-confusing-arrow': OFF,
        'no-underscore-dangle': OFF,
        'function-paren-newline': OFF,
        'prefer-destructuring': [WARN, {
            VariableDeclarator: {
                array: false,
                object: true
            },
            AssignmentExpression: {
                array: false,
                object: false
            }
        }, {
            enforceForRenamedProperties: false
        }],
        'no-restricted-globals': OFF,
        'object-curly-newline': [
            'error',
            {
                multiline: false,
                consistent: true
            }
        ]

    },
    globals: {
        describe: false,
        before: false,
        it: false,
        expect: false
    }
};
