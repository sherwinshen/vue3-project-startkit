/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['vue', 'js', 'ts'],
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest',
  },
  // 别名处理，不然无法识别！！！
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  // 匹配 __tests__ 目录下的 .js/.ts 文件 或其他目录下的 xx.test.js/ts xx.spec.js/ts
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts)$',
};
