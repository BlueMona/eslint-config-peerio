# eslint-config-peerio

### 1. Install package:
```
npm install --save-dev eslint-config-peerio@x.x.x
```
### 2. Replace eslint-config-peerio package version in package.json to `*`
```
    "eslint-config-peerio": "*"
```
### 3. Create `.eslintrc.js` file in repository root
```
module.exports = {
        extends: ['peerio'],
        rules: {
            // All rules should be configured in eslint-config-peerio.
            // Although this should not normally happen,
            // you can override repository-specific rules here.
        }
};
```

### 4. Copy `.editorconfig` file to repository root
