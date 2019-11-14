module.exports = {
  globals: {
    'ts-jest': {
      tsConfig: './tsconfig.json',
    },
  },
  moduleFileExtensions: ['js', 'ts', 'json'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testMatch: ['**/*.spec.ts'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  testEnvironment: 'node',
}
