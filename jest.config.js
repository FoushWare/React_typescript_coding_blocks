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
  collectCoverageFrom: [
    '**/src/**/*.js',
  ] /** include all the project files in coverage not only the test files */,
  coverageThreshold: {
    global: {
      statements: 31,
      branches: 18,
      functions: 25,
      lines: 29,
    },
    //When makeing specific rules for files respect to coverage .. it subtract it's percenge from the global setting Above
    './src/shared/utils.js': {
      // make this file strick for coverage ..if anyone change function or add function make sure every line in covered in testing
      statements: 100,
      branches: 80,
      functions: 100,
      lines: 100,
    },
  },
}
