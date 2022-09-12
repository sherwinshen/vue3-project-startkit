# 前言

本项目为文章《前端 Vue3 项目搭建指南》&《前端统一代码规范指南》的代码仓库，主要详细介绍了基于 Vue3 技术栈初始化前端项目的完整流程，包含框架搭建、代码规范、单元测试和自动部署等内容，完整内容详见：

1. [前端 Vue3 项目搭建指南](https://fe-planet.netlify.app/technology/blogs-docs/vue3-startkit.html)
2. [前端统一代码规范指南](https://fe-planet.netlify.app/technology/blogs-docs/code-style.html)

# 1. 架构搭建

- 编程语言：[TypeScript 4.x](https://www.typescriptlang.org/)
- 前端框架：[Vue 3.x](https://v3.cn.vuejs.org/)
- 构建工具：[Vite 2.x](https://vitejs.dev/)
- CSS 相关：[Less](https://lesscss.org/) + [Tailwind CSS](https://tailwindcss.com/)
- 路由工具：[Vue Router 4.x](https://next.router.vuejs.org/index.html)
- 状态管理：[Pina](https://pinia.vuejs.org) / [Vuex 4.x](https://next.vuex.vuejs.org/)
- HTTP 工具：[Axios](https://axios-http.com/)
- UI 框架：[Element Plus](https://element-plus.gitee.io/zh-CN/)

# 2. 代码规范

- [EditorConfig ](https://editorconfig.org/)用于维护不同开发人员、不同编辑器的编码风格
- [ESLint](https://eslint.org/) 是一款用于查找并报告代码中问题的工具
- [Stylelint](https://stylelint.io/) 是一个强大的现代 CSS 检测器
- [Prettier](https://prettier.io/) 是一款强大的代码格式化工具，支持多种语言
- [lint-staged](https://github.com/okonet/lint-staged) 是一个在 git 暂存文件上运行 linters 的工具
- [husky](https://typicode.github.io/husky/#/) 是 Git Hook 工具，可以设置在 git 各个阶段触发设定的命令

# 3. Commit 规范

- [commitlint](https://github.com/conventional-changelog/commitlint)：检查您的提交消息是否符合 conventional commit format
- [commitizen](https://github.com/commitizen/cz-cli)：帮助撰写规范 commit message 的工具
- [cz-customizable](https://github.com/leoforfree/cz-customizable)：自定义配置 commitizen 工具的终端操作
- [commitlint-config-cz](https://github.com/whizark/commitlint-config-cz)：合并 cz-customizable 的配置和 commitlint 的配置

# 4. 单元测试

- [vitest](https://cn.vitest.dev)：A Vite-native unit test framework. It's fast!
- [Vue Test Utils](https://next.vue-test-utils.vuejs.org/)：a set of utility functions aimed to simplify testing Vue.js components

> 如果发现本项目有错误，欢迎提交 issues 或邮件 sherwin_sw@163.com
