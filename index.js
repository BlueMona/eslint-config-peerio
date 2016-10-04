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
        "comma-dangle": [ERROR, "never"],
        "prefer-const": WARN,
        "no-use-before-define": [ERROR, { "functions": false, "classes": true }],
        "no-unused-expressions": [ERROR, { "allowShortCircuit": true, "allowTernary": true } ],
        "no-param-reassign": [ERROR, { "props": false }],
        "no-restricted-syntax": OFF,
        "no-extend-native": OFF,
        "no-console": OFF,
        "no-continue": OFF,
        "no-plusplus": OFF,
        "no-bitwise": OFF,
        "class-methods-use-this": OFF,
        "guard-for-in": WARN,
        "max-len": [WARN, 120],
        "quotes": [ERROR, "single", { "avoidEscape": true, "allowTemplateLiterals": true }],
        "semi": [ERROR, "always"],
        "func-names": OFF,
        "space-before-function-paren": [ERROR, "never"],
        "react/jsx-indent": [ERROR, 4],
        "react/jsx-first-prop-new-line": OFF,
        "react/jsx-closing-bracket-location": OFF,
        "react/jsx-indent-props": OFF,
        "no-confusing-arrow": WARN,
        "no-underscore-dangle": OFF,
        "flowtype/define-flow-type": ERROR,
        "flowtype/require-parameter-type": [ERROR, { "excludeArrowFunctions": "expressionsOnly" }],
        "flowtype/require-return-type": [ERROR, "never", { "excludeArrowFunctions": "expressionsOnly", "annotateUndefined": "never" }],
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
