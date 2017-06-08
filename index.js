var OFF = 0,
    WARN = 1,
    ERROR = 2;

module.exports = {
    extends: [
        'eslint-config-airbnb'
    ].map(require.resolve),
    plugins: [],
    settings: {
    },
    rules: {
        "arrow-parens": OFF,
        "arrow-body-style": OFF,
        "indent": [ERROR, 4, { "SwitchCase": 1, "VariableDeclarator": 1 }],
        "one-var-declaration-per-line": OFF,
        "one-var": OFF,
        "no-unused-vars": WARN,
        "comma-dangle": [ERROR, "never"],
        "prefer-const": WARN,
        "no-use-before-define": [ERROR, { "functions": false, "classes": true }],
        "no-unused-expressions": [ERROR, { "allowShortCircuit": true, "allowTernary": true }],
        "no-param-reassign": [ERROR, { "props": false }],
        "no-restricted-syntax": OFF,
        "no-extend-native": OFF,
        "no-console": OFF,
        "no-continue": OFF,
        "no-plusplus": OFF,
        "no-bitwise": OFF,
        "class-methods-use-this": OFF,
        "guard-for-in": OFF,
        "max-len": [WARN, 120],
        "quotes": [ERROR, "single", { "avoidEscape": true, "allowTemplateLiterals": true }],
        "semi": [ERROR, "always"],
        "func-names": OFF,
        "space-before-function-paren": [ERROR, "never"],
        "react/jsx-indent": [ERROR, 4],
        "react/jsx-first-prop-new-line": OFF,
        "react/jsx-closing-bracket-location": OFF,
        "react/jsx-indent-props": OFF,
        "react/jsx-max-props-per-line": OFF,
        "jsx-a11y/no-noninteractive-element-interactions": OFF,
        "react/forbid-prop-types": OFF,
        "react/no-unused-prop-types": OFF,
        "no-confusing-arrow": WARN,
        "no-underscore-dangle": OFF,
    },
    globals: {
        "describe": false,
        "before": false,
        "it": false,
        "expect": false
    }
};
