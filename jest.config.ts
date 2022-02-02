export default {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/mocks/**',
    '!src/**/test-utils.tsx',
    // '!src/index.tsx',
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/'
  ],
  coverageReporters: [
    'text',
    'lcov',
  ],
  globals: {},
  maxWorkers: '50%',
  moduleFileExtensions: [
    'js',
    'jsx',
    'ts',
    'tsx',
  ],
  moduleDirectories: [
    'node_modules',
    'src/utils',
    __dirname,
  ],
  testEnvironment: 'jsdom',
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[tj]s?(x)'
  ],
}
