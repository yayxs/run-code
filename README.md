# 🚀 Run Code

一个现代化的在线 JavaScript 代码编辑器，支持智能补全和实时运行。

A modern online JavaScript code editor with intelligent autocompletion and live execution.

## ✨ 功能特性 / Features

- 🔥 **实时代码编辑** / **Live Code Editing** - 基于 CodeMirror 6 的现代编辑器
- 🧠 **智能补全** / **Smart Autocompletion** - JavaScript API、关键字和方法自动补全
- ⚡ **即时运行** / **Instant Execution** - 代码修改后实时查看运行结果
- 🎨 **语法高亮** / **Syntax Highlighting** - JavaScript 代码语法高亮显示
- 📱 **响应式设计** / **Responsive Design** - 支持桌面和移动设备
- 🎯 **控制台输出** / **Console Output** - 内置控制台显示运行结果和错误

## 🛠️ 技术栈 / Tech Stack

- **Next.js 15** - React 全栈框架 / React full-stack framework
- **Sandpack** - CodeSandbox 开源代码编辑器 / CodeSandbox open-source editor
- **CodeMirror 6** - 现代代码编辑器 / Modern code editor
- **TypeScript** - 类型安全 / Type safety
- **React 19** - 最新 React 版本 / Latest React version

## 🚀 快速开始 / Quick Start

```bash
# 安装依赖 / Install dependencies
pnpm install

# 启动开发服务器 / Start development server
pnpm dev

# 访问 / Visit: http://localhost:3000
```

## 🎯 智能补全 / Auto-completion

支持丰富的 JavaScript 补全 / Rich JavaScript completion support:

- **关键字 / Keywords**: `function`, `if`, `for`, `class`, `async`, `await`
- **Console API**: `console.log`, `console.error`, `console.warn`
- **DOM API**: `document.querySelector`, `addEventListener`
- **Math 对象 / Math**: `Math.random`, `Math.floor`, `Math.ceil`
- **数组方法 / Array Methods**: `map`, `filter`, `reduce`, `forEach`
- **字符串方法 / String Methods**: `split`, `replace`, `trim`
- **Promise API**: `then`, `catch`, `Promise.resolve`

### 使用方法 / Usage

- 开始输入即可看到补全建议 / Start typing to see suggestions
- `Ctrl+Space` (`Cmd+Space` on Mac) 手动触发 / Manual trigger
- `Tab` 或 `Enter` 接受建议 / Accept suggestion
- `Escape` 关闭补全 / Close completion

## 📁 项目结构 / Project Structure

```
run-code/
├── app/
│   ├── layout.tsx          # 应用布局 / App layout
│   └── page.tsx           # 主页面 / Main page
├── components/
│   └── sandpack-styles.tsx # Sandpack 样式 / Sandpack styles
├── styles/
│   ├── globals.css        # 全局样式 / Global styles
│   └── main.css          # 主要样式 / Main styles
└── package.json          # 项目配置 / Project config
```

## 🔧 开发命令 / Development Commands

```bash
pnpm dev     # 开发模式 / Development mode
pnpm build   # 构建生产版本 / Build for production
pnpm start   # 启动生产服务器 / Start production server
pnpm lint    # 代码检查 / Lint code
```

## 📸 预览 / Preview

在编辑器中输入 JavaScript 代码，立即看到运行结果！

Write JavaScript code in the editor and see results instantly!

## 📝 License

MIT License

## 🤝 贡献 / Contributing

欢迎提交 Pull Request 和 Issue！

Pull requests and issues are welcome!
