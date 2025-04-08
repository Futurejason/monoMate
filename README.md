# LangChain 项目

## 代码规范与格式化

本项目使用 ESLint 和 Prettier 进行代码规范检查和格式化。

### 已配置功能

1. **ESLint 代码规范检查**：
   - 基于 TypeScript 的规则集
   - 与 Prettier 集成避免冲突
   - 自定义规则优化开发体验

2. **Prettier 自动格式化**：
   - 统一代码风格
   - 保存时自动格式化

3. **VSCode 自动格式化设置**：
   - 保存文件时自动格式化
   - 使用 ESLint 自动修复问题

### 使用方法

- 手动检查代码规范：`pnpm lint`
- 自动修复代码规范问题：`pnpm lint:fix`
- 手动格式化代码：`pnpm format`
- 在 VSCode 中保存文件会自动格式化

### 确保 VSCode 扩展已安装

为了获得最佳体验，请安装以下 VSCode 扩展：

- ESLint (`dbaeumer.vscode-eslint`)
- Prettier (`esbenp.prettier-vscode`) 