export default {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/mocks/**',
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
  testEnvironment: 'jsdom',
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[tj]s?(x)'
  ],
}
