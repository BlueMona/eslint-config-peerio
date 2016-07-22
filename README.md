# peerio-eslint-config

1. Install package:
```
npm i -D peerio-eslint-config
```

2. Create `.eslintrc` file in repository root
```
module.exports = {
        extends: ['peerio-eslint-config']
                    .map(require.resolve),
        rules: {
        // override repository-specific rules here
        }
};
```

3. Copy `.editorconfig` file to repository root
