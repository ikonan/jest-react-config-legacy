# @iiko/jest-config-legacy

jest + react17.x 简单封装

## 安装

```
npm install --save-dev @iiko/jest-config-legacy
```

## jest.config.js 配置

项目根目录下创建 jest.config.js 文件

```js
const { compilerOptions } = require("./tsconfig.json");
const {
  default: defineConfig,
  pathsToModuleNameMapper,
} = require("@iiko/jest-config-legacy");

module.exports = defineConfig({
  // 从正则表达式到模块名称或模块名称数组的映射，允许用单个模块存根替换资源
  moduleNameMapper: {
    ...pathsToModuleNameMapper(compilerOptions.paths, {
      prefix: "<rootDir>/",
    }),
  },
});
```

## tsconfig.json 配置

类型配置让 ts 识别 jest 的全局变量

```json
{
  "compilerOptions": {
    "types": ["@iiko/jest-config-legacy/types"]
  }
}
```
