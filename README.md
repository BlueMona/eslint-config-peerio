# eslint-config-peerio

Install package:
```
npm i -D eslint-config-peerio
```

Create `.eslintrc` file in repository root
```
module.exports = {
        extends: ['eslint-config-peerio']
                    .map(require.resolve),
        rules: {
        // override repository-specific rules here
        }
};
```

Copy `.editorconfig` file to repository root

