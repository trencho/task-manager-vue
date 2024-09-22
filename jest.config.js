module.exports = {
    moduleFileExtensions: ['js', 'json', 'vue'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1'
    },
    preset: '@vue/cli-plugin-unit-jest',
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.vue$': '@vue/vue3-jest',
        '^.+\\.js$': 'babel-jest',
    }
};
