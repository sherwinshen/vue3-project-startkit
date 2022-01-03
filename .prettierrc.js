module.exports = {
  // 更多规则详见：https://prettier.io/docs/en/options.html
  printWidth: 120, // 单行长度
  tabWidth: 2, // 缩进长度
  useTabs: false, // 使用空格代替tab缩进
  semi: true, // 句末使用分号
  singleQuote: true, // 使用单引号
  bracketSpacing: true, // 在对象前后添加空格-eg: { foo: bar }
  quoteProps: 'consistent', // 对象的key添加引号方式
  trailingComma: 'all', // 多行时尽可能打印尾随逗号
  jsxBracketSameLine: true, // 多属性html标签的‘>’折行放置
  arrowParens: 'always', // 单参数箭头函数参数周围使用圆括号-eg: (x) => x
  jsxSingleQuote: true, // jsx中使用单引号
  proseWrap: 'preserve',
  htmlWhitespaceSensitivity: 'ignore', // 对HTML全局空白不敏感
};
