module.exports = {
  // 此项是用来告诉 eslint 找当前配置文件不能往父级查找
  root: true,
  // 全局环境
  env: {
    browser: true,
    node: true,
  },
  // 指定如何解析语法，eslint-plugin-vue 插件依赖vue-eslint-parser解析器
  parser: 'vue-eslint-parser',
  // 优先级低于parse的语法解析配置
  parserOptions: {
    // 指定ESlint的解析器
    parser: '@typescript-eslint/parser',
    // 允许使用ES语法
    ecmaVersion: 2020,
    // 允许使用import
    sourceType: 'module',
    // 允许解析JSX
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'eslint:recommended', // 引入 ESLint的核心功能并且报告一些常见的共同错误
    'plugin:import/recommended', // import/export语法的校验
    'plugin:import/typescript', // import/export 语法的校验（支持 TS）
    // 'plugin:vue/essential' // vue2 版本使用
    // 'plugin:vue/recommended', // vue2 版本使用
    'plugin:vue/vue3-essential', // vue3 版本使用
    'plugin:vue/vue3-recommended', // vue3 版本使用
    'plugin:@typescript-eslint/recommended',
    'prettier', // prettier 要放在最后！
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-undef': 'off',
    // 更多规则详见：http://eslint.cn/docs/rules/
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};
