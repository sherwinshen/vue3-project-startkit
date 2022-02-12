module.exports = {
  extends: [
    'stylelint-config-standard', // 官方 stylelint 规则
    'stylelint-config-rational-order', // 属性排列顺序规则
    /*
     * 通过安装 stylelint-prettier，设置 stylelint-prettier/recommended，其包含了三个设置
       plugins: ['.'],
       extends: ['stylelint-config-prettier'], // 需要安装 stylelint-config-prettier
       rules: {'prettier/prettier': true},
     */
    'stylelint-prettier/recommended',
    'stylelint-config-recommended-vue',
  ],
  rules: {
    // 更多规则详见：https://stylelint.io/user-guide/rules/list
    'selector-class-pattern': null,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['deep'],
      },
    ],
  },
};
