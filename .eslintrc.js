module.exports = {
  root: true,
  env: {
    browser: true,
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/airbnb',
  ],
  plugins: [
    'vue',
  ],
  rules: {
    'prefer-destructuring': 'off',
    camelcase: 'error',
    'no-new': 'error',
    'no-unused-vars': 'error',
    'max-len': ['error', { code: 100 }],
    'import/no-dynamic-require': 'allow',
    'no-console': 'error',
    'padded-blocks': ['error', 'never'],
    'no-unused-expressions': 'error',
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      optionalDependencies: ['test/unit/index.js'],
    }],
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state', // for vuex state
        'acc', // for reduce accumulators
        'e', // for e.returnvalue
        'Vue', // for Vue.prototype
        'config',
      ],
    }],
    'no-plusplus': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    semi: ['error', 'always'],
    'no-confusing-arrow': 'off',
    'arrow-parens': 'off',
    'consistent-return': 'off',
    'no-alert': 'off',
    'no-underscore-dangle': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never',
    }],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
