module.exports = {
  root: true,
  env: {
    node: true
  },
  globals: {
    _: true,
    $: true,
    moment: true
  },
  extends: [
    'plugin:vue/essential',
    'plugin:vue/recommended',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaFeatures: {
      legacyDecorators: true
    }
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-undef': 'off',
    'no-return-assign': 'off',
    'no-unused-expressions': 'off',
    'eqeqeq': 'off',
    'vue/no-parsing-error': 'off',
    'vue/no-v-html': 'off',
    camelcase: 'off'
  }
}
