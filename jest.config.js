const path = require('path')
// configure jest [jsdom] envirnoment
module.exports = {
  // testEnvironment: 'jest-environment-node' // work from node environment
  testEnvironment: 'jest-environment-jsdom', // Make it like you are working from the browser
  moduleNameMapper: {
    '\\.module\\.css$': 'identity-obj-proxy', // to make className appear in the test
    '\\.css$': require.resolve('./test/style-mock.js'), // mocking css file because it's render as module not css file
  },
  moduleDirectories: ['node_modules', path.join(__dirname, 'src'), 'shared'],
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect', // for More better messages [asserstion better message]
  ],
  snapshotSerializers: [
    '@emotion/jest/serializer' /* if needed other snapshotSerializers should go here */,
  ],
  collectCoverageFrom: ['**/src/**/*.js'],
}
