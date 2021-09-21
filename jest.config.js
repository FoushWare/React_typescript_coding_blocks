module.exports = {
  ...require('./test/jest-common'),
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
  projects: ['./test/jest.client.js', './test/jest.server.js'],
}
