module.exports = {
  // type 类型
  types: [
    { value: 'feat', name: 'feat: 新增功能' },
    { value: 'fix', name: 'fix: 修复 bug' },
    { value: 'docs', name: 'docs: 文档变更' },
    { value: 'style', name: 'style: 代码格式改变（不影响功能）' },
    { value: 'refactor', name: 'refactor: 代码重构（不包括 bug 修复、功能新增）' },
    { value: 'perf', name: 'perf: 性能优化' },
    { value: 'test', name: 'test: 添加或修改测试用例' },
    { value: 'build', name: 'build: 构建流程或外部依赖变更' },
    { value: 'ci', name: 'ci: 修改 CI 配置或脚本' },
    { value: 'chore', name: 'chore: 对构建过程或辅助工具和库的更改（不影响源文件、测试用例）' },
    { value: 'revert', name: 'revert: 回滚 commit' },
  ],
  // scope 类型
  scopes: [
    { name: 'components' },
    { name: 'hooks' },
    { name: 'utils' },
    { name: 'styles' },
    { name: 'deps' },
    // { name: 'custom' }, // 如果选择 custom，后面会让你再输入一个自定义的 scope。也可以不设置此项，把后面的 allowCustomScopes 设置为 true
  ],
  allowCustomScopes: true,
  // 交互提示信息
  messages: {
    type: '确保本次提交遵循 Angular 规范！\n选择你要提交的类型：',
    scope: '选择一个 scope（可选）：\n',
    customScope: '请输入自定义的 scope：\n', // 选择 scope: custom 时会出现的提示
    subject: '填写简短精炼的变更描述：\n',
    body: '填写更加详细的变更描述（可选）。使用 "|" 换行：\n',
    breaking: '列举非兼容性重大的变更（可选）：\n',
    footer: '列举出所有变更的 ISSUES CLOSED（可选）：\n',
    confirmCommit: '是否确认提交？',
  },
  // 设置只有 type 选择了 feat 或 fix，才询问 breaking message
  allowBreakingChanges: ['feat', 'fix'],
  // subject 限制长度
  subjectLimit: 100,
};
