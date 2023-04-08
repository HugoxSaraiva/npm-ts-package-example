/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    modulePathIgnorePatterns: ['<rootDir>/out/', '<rootDir>/node_modules/'],
    testMatch: ['<rootDir>/tests/**/*.test.ts'],
}