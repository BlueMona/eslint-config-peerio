var OFF = 0,
    WARN = 1,
    ERROR = 2;

const base = require('./index.base');

base.extends.push(require.resolve('eslint-config-airbnb'));

Object.assign(base.rules, {
    "react/jsx-indent": [ERROR, 4],
    "react/jsx-first-prop-new-line": OFF,
    "react/jsx-closing-bracket-location": OFF,
    "react/jsx-indent-props": OFF,
    "react/jsx-max-props-per-line": OFF,
    "react/forbid-prop-types": OFF,
    "react/no-unused-prop-types": OFF,
    "react/jsx-closing-tag-location": OFF,
    "jsx-a11y/anchor-is-valid": OFF,
    "jsx-a11y/no-noninteractive-element-interactions": OFF,
    "jsx-a11y/click-events-have-key-events": OFF,
    "jsx-a11y/mouse-events-have-key-events": OFF
});

module.exports = base;
