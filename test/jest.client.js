module.exports = {
  ...require('./jest-common'),
  displayName: 'dom',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect', // for More better messages [asserstion better message]
  ],
  snapshotSerializers: [
    '@emotion/jest/serializer' /* if needed other snapshotSerializers should go here */,
  ],
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
