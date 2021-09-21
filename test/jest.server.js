const path = require('path')

module.exports = {
  ...require('./jest-common'),
  displayName: 'Server', //This is 🔖Label to differentiate [server and client ] Tests
  coverageDirectory: path.join(__dirname, '../coverage/server'),
  testEnvirnoment: 'jest-envirnoment-node',
  testMatch: ['**/__server_test__/**/*.js'],
}
