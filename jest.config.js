module.exports = {
  verbose: true,
  collectCoverage: true,
  coverageDirectory: '<rootDir>/client-coverage',
  collectCoverageFrom: [
    './client/src/**/*.{js,jsx}'
  ],
  coveragePathIgnorePatterns: [
    '<rootDir>/client/tests',
    '<rootDir>/client/tests/setup/',
    '<rootDir>/client/tests/__mocks__/'
  ],
  setupFiles: [
    'jest-localstorage-mock',
    '<rootDir>/client/tests/setup/index.js'
  ],
  snapshotSerializers: [
    'enzyme-to-json/serializer'
  ],
  moduleNameMapper: {
    '^.+\\.(css|scss)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/client/tests/__mocks__/fileMock.js'
  }
};
