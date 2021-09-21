const path = require('path')

module.exports = {
  ...require('./jest-common'),
  coverageDirectory: path.join(__dirname, '../coverage/server'),
  testEnvirnoment: 'jest-envirnoment-node',
  testMatch: ['**/__server_test__/**/*.js'],
}
