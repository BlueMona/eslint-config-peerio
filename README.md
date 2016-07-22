# peerio-eslint-config

Install package:
```
npm i -D peerio-eslint-config
```

Create `.eslintrc` file in repository root
```
module.exports = {
        extends: ['peerio-eslint-config']
                    .map(require.resolve),
        rules: {
        // override repository-specific rules here
        }
};
```

Copy `.editorconfig` file to repository root

