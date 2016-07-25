var OFF = 0, WARN = 1, ERROR = 2;

module.exports = {
    extends: [
        'eslint-config-airbnb'
    ].map(require.resolve),
    rules: {
        "indent": [ERROR, 4, { "SwitchCase": 1, "VariableDeclarator": 1 }],
        "one-var-declaration-per-line": OFF,
        "one-var": OFF,
        "prefer-const": WARN,
        "no-use-before-define": [ERROR, { "functions": false, "classes": true }],
        "no-param-reassign": [ERROR, { "props": false }],
        "comma-dangle": [ERROR, "never"],
        "no-restricted-syntax": OFF,
        "guard-for-in": WARN,
        "no-console": OFF,
        "max-len": [WARN, 120],
        "quotes": [ERROR, "single", { "avoidEscape": true, "allowTemplateLiterals": true }],
        "semi": [ERROR, "always"],
        "react/jsx-indent": [ERROR, 4],
        "react/jsx-first-prop-new-line": OFF,
        "react/jsx-closing-bracket-location": OFF,
        "react/jsx-indent-props": OFF,
        "no-confusing-arrow": WARN
    },
    globals: {
        "describe": false,
        "before": false,
        "it": false,
        "expect": false
    }
};
