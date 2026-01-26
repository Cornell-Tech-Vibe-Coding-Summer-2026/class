module.exports = {
  testMatch: ['**/tests/**/test.js'],
  testEnvironment: 'node',
  reporters: [
    'default',
    ['../../jest-grade-reporter.js', {}]
  ]
};
