module.exports = {
    root: true,
    extends: [
      // add more generic rulesets here, such as:
      // 'eslint:recommend
      'plugin:vue/recommended'
    ],
    plugins: ['vue'],
    parserOptions: {
      parser: 'babel-eslint',
    },
    rules: {
      'vue/require-default-prop': 0
    }
}
