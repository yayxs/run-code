# Run Code in Browser / 浏览器代码运行平台

## English

This project is a Next.js application that provides an in-browser JavaScript coding environment using Sandpack.

### Features

- Code Editor on the left for writing JavaScript.
- Live Console on the right displaying output.
- Uses [@codesandbox/sandpack-react](https://github.com/codesandbox/sandpack) for embedding a code sandbox.
- Styled with Tailwind CSS.

### Getting Started

1. Install dependencies:
   ```bash
   pnpm install
   ```
2. Run the development server:
   ```bash
   pnpm dev
   ```
3. Open your browser and navigate to http://localhost:3000 to view the application.

### Project Structure

- **app/page.tsx**: Main page component containing the Sandpack configuration.
- **app/globals.css**: Global styles using Tailwind CSS.
- **package.json**: Project configuration and scripts.

## 中文

此项目是一个基于 Next.js 的应用程序，通过 Sandpack 提供了浏览器中的 JavaScript 编码环境。

### 特性

- 左侧为代码编辑器，可编写 JavaScript 代码。
- 右侧为实时控制台，展示运行输出。
- 使用 [@codesandbox/sandpack-react](https://github.com/codesandbox/sandpack) 嵌入代码沙箱。
- 使用 Tailwind CSS 进行样式设计。

### 快速开始

1. 安装依赖：
   ```bash
   pnpm install
   ```
2. 启动开发服务器：
   ```bash
   pnpm dev
   ```
3. 打开浏览器并访问 http://localhost:3000 查看应用效果。

### 项目结构

- **app/page.tsx**：包含 Sandpack 配置的主页面组件。
- **app/globals.css**：全局样式文件，使用 Tailwind CSS 编写。
- **package.json**：项目配置和脚本。

## License

This project is open-source and available under the MIT License.
