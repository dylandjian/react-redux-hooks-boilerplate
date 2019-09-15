module.exports = {
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 70,
      statements: 60,
    },
  },
  coverageDirectory: 'public/coverage/',
  setupFiles: ['./config/tests/test.config.js'],
  verbose: true,
  rootDir: '../../',
  moduleFileExtensions: ['js', 'json'],
  setupFilesAfterEnv: ['@testing-library/react'],
};
