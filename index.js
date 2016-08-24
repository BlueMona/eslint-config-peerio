var OFF = 0,
    WARN = 1,
    ERROR = 2;

module.exports = {
    extends: [
        'eslint-config-airbnb'
    ].map(require.resolve),
    plugins: [
        "flowtype"
    ],
    settings: {
        flowtype: {
            onlyFilesWithFlowAnnotation: true
        }
    },
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
        "no-confusing-arrow": WARN,
        "flowtype/define-flow-type": ERROR,
        "flowtype/require-parameter-type": [ERROR, "always", { "excludeArrowFunctions": true }],
        "flowtype/require-return-type": [ERROR, "always", { "excludeArrowFunctions": true, "annotateUndefined": "always" }],
        "flowtype/require-valid-file-annotation": [ERROR, "always"],
        "flowtype/space-after-type-colon": [ERROR, "always"],
        "flowtype/space-before-type-colon": [ERROR, "never"],
        "flowtype/space-before-generic-bracket": [ERROR, "never"],
        "flowtype/generic-spacing": [ERROR, "never"],
        "flowtype/union-intersection-spacing": [ERROR, "never"],
        "flowtype/type-id-match": [ERROR, "^([A-Z][a-z0-9]+)+Type$"],
        "flowtype/use-flow-type": ERROR,
        "flowtype/valid-syntax": ERROR
    },
    globals: {
        "describe": false,
        "before": false,
        "it": false,
        "expect": false
    }
};
