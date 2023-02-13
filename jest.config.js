module.exports = {
  testEnvironment: 'node',
  //testRegex: '/tests/.*\\.(test|spec)?\\.(ts|tsx)$',
  testMatch: ['**/tests/**/*.test.ts', '!**/._*'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  verbose: true,
  globals: {},
  transform: {
    '^.+\\.ts?$': ['ts-jest', { tsconfig: 'tsconfig.json' }],
  },
};
