module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'alloy',
    'alloy/react',
    'plugin:react/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'max-len': ['error', {
      ignoreComments: true,
      code: 120,
    }],
    'react/jsx-filename-extension': [2, {
      extensions: ['.js', '.jsx', '.tsx'],
    }],
    'no-unused-vars': ['error', { "argsIgnorePattern": "^_" }],
    'react-hooks/rules-of-hooks': ['error'],
    'react-hooks/exhaustive-deps': ['error'],
    '@typescript-eslint/naming-convention': [
      'error',
      { 'selector': 'variableLike', 'format': ['camelCase', 'PascalCase'], 'leadingUnderscore': 'allow'},
      { 'selector': 'typeLike', 'format': ['PascalCase'] },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
  },
  settings: {
    react: {
      createClass: 'createReactClass',
      pragma: 'React',
      fragment: 'Fragment',
      version: '18.0',
      flowVersion: '0.53'
    },
    propWrapperFunctions: [
      'forbidExtraProps',
      {'property': 'freeze', 'object': 'Object'},
      {'property': 'myFavoriteWrapper'},
      {'property': 'forbidExtraProps', 'exact': true}
    ],
    componentWrapperFunctions: [
      'observer',
      {'property': 'styled'},
      {'property': 'observer', 'object': 'Mobx'},
      {'property': 'observer', 'object': '<pragma>'}
    ],
    formComponents: [
      'CustomForm',
      {'name': 'SimpleForm', 'formAttribute': 'endpoint'},
      {'name': 'Form', 'formAttribute': ['registerEndpoint', 'loginEndpoint']},
    ],
    linkComponents: [
      'Hyperlink',
      {'name': 'MyLink', 'linkAttribute': 'to'},
      {'name': 'Link', 'linkAttribute': ['to', 'href']},
    ]
  }

}
