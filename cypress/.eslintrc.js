module.exports = {
  root: true,
  // plugins: ['cypress', 'eslint-plugin-cypress'],
  plugins: ['eslint-plugin-cypress'],
  extends: ['plugin:cypress/recommended'],
  env: {'cypress/globals': true},
}