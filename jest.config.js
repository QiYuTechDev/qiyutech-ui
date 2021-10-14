/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    preset: 'ts-jest',

    // fix document is not defined
    // https://github.com/testing-library/react-testing-library/issues/422#issuecomment-518007141
    testEnvironment: 'jsdom',

    setupFilesAfterEnv: ['./jest-setup.ts'],
};
