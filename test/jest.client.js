module.exports = {
  ...require('./jest-common'),
  displayName: 'Client',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect', // for More better messages [asserstion better message]
    'jest-axe/extend-expect',
  ],
  snapshotSerializers: [
    '@emotion/jest/serializer' /* if needed other snapshotSerializers should go here */,
  ],
}
