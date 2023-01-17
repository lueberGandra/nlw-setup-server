module.exports = {
    'root': true,
    'env': {
        'browser': false,
        'node': true,
        'es2021': true,
        'jest': true
    },
    'extends': [
        'plugin:@typescript-eslint/recommended',
        'airbnb-base',
        'airbnb-typescript/base'
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'project': 'tsconfig.json',
        'sourceType': 'module',
    },
    'plugins': [
        '@typescript-eslint',
        'sonarjs',
    ],
    'rules': {
        '@typescript-eslint/indent': ['error', 4],
        '@typescript-eslint/no-unused-expressions': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'max-classes-per-file': 'off',
        'no-underscore-dangle': 'off',
        'no-param-reassign': 'off',
        'radix': 'off',
        'no-console': 'off',
        'camelcase': 'warn',
        'arrow-parens': [2,'always'],
        'quotes': [2,'single'],
        'implicit-arrow-linebreak': 'off',
        'consistent-return': 'off',
        '@typescript-eslint/no-unused-vars': ['off'],
        'no-unused-vars': ['off'],
        'object-curly-newline': 'off',
        'max-len': 'off',
        'import/no-extraneous-dependencies': ['off'],
        'sonarjs/no-one-iteration-loop': ['error'],
        'sonarjs/no-identical-expressions': ['error'],
        'sonarjs/no-use-of-empty-return-value': ['error'],
        'sonarjs/no-extra-arguments': ['error'],
        'sonarjs/no-identical-conditions': ['error'],
        'sonarjs/no-collapsible-if': ['error'],
        'sonarjs/no-collection-size-mischeck': ['error'],
        'sonarjs/no-duplicated-branches': ['error'],
        'sonarjs/no-redundant-boolean': ['error'],
        'sonarjs/no-unused-collection': ['error'],
        'sonarjs/no-useless-catch': ['error'],
        'sonarjs/prefer-object-literal': ['error'],
        'sonarjs/prefer-single-boolean-return': ['error'],
        'sonarjs/no-inverted-boolean-check': ['error'],
        'import/prefer-default-export': ['off'],
        'no-case-declarations': ['off'],
        'class-methods-use-this': ['off'],
        '@typescript-eslint/lines-between-class-members': ['off'],
        '@typescript-eslint/no-shadow': ['off'],
        'no-restricted-syntax': ['off'],
        'import/first': ['off'],
        'import/no-cycle': ['off']
    }
};
