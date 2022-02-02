// eslint-disable-next-line no-undef
module.exports = {
    'env': {
        'browser': true,
        'es2021': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'prettier/prettier'
    ],
    'parser': '@typescript-eslint/parser',
    'settings': {
        'react': {
            'version': 'detect'
        }
    },
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'plugins': [
        'react',
        '@typescript-eslint',
    ],
    'rules': {
        'semi': ['error', 'never'],
        'quotes': ['error', 'single']
    }
}
