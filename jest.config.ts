// import { pathsToModuleNameMapper } from 'ts-jest/utils';
// import { compilerOptions } from './tsconfig.json';

export default {
  clearMocks: true,
  collectCoverage: false,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
  ],
  coverageProvider: 'v8',
  testMatch: ['**/*.spec.ts'],
  setupFiles: ['<rootDir>/jest.setup.ts'],
  coverageReporters: ['lcov', 'text-summary'],
  preset: 'ts-jest',
  // moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
  //   prefix: '<rootDir>/src/',
  // }),
};
