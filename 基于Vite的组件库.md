# 基于Vite的组件库

## 将组件封装为组件库

- 如何使用Vite 从零搭建 Vue 开发环境 ？

  - 安装pnpm i vue@"3.2.37"
  - 安装pnpm i @vitejs/plugin-vue@"3.0.3" -D
  - 在vite.config.ts中引入@vitejs/plugin-vue插件 注册到plugins

- 如何让 Vite 支持 SFC 与 JSX 语法 ？

  - 创建编译文件shims-vue.d.ts

  - ```typescript
    declare module "*.vue" {
      import { DefineComponent } from "vue";
      const component: DefineComponent<{}, {}, any>;
      export default component;
    }
    ```

  - 安装pnpm i @vitejs/plugin-vue-jsx@"2.0.0" -D

  - 引入插件并注册到plugins

  - ```typescript
     import vueJsx from '@vitejs/plugin-vue-jsx' 
     vueJsx({})
    ```

  - 新建 tsconfig.json

  - ```json
    {
      "compilerOptions": {
        "declaration": true, /* 生成相关的 '.d.ts' 文件。 */
        "declarationDir": "./dist/types", /* '.d.ts' 文件输出目录 */
        "jsx": "preserve",
      },
      "include": [
        "./**/*.*",
        "./shims-vue.d.ts",
      ],
      "exclude": [
        "node_modules"
      ],
      "esModuleInterop": true,
      "allowSyntheticDefaultImports": "true"
    }
    ```

- 组件库的封装形态是什么样子 ？

  - 完整引入 ：一次性引入全部组件
  - 按需引入 ：导出单个组件

- 如何使用 Vite 完成库文件的构建 ？

  - ```typescript
    const rollupOptions = {
    
      external: ["vue", "vue-router"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    };
    
    export default defineConfig({
      // 添加库模式配置
      build: {
        rollupOptions,
        minify: false,
        lib: {
          entry: "./src/entry.ts",
          name: "SSYUI",
          fileName: "ssy-ui",
          // 导出模块格式
          formats: ["esm", "umd", "iife"],
        },
      },
    })
    ```

## 用UnoCSS实现原子化CSS

- Tailwind 与 UnoCSS 的关系 ？
  - UnoCSS性能比Tailwind更佳 快 200 倍
- 怎样在 UnoCSS 中使用变量定制样式 ？
  - 把样式定义中变量的取值添加到 Safelist 中去
- 怎样在 UnoCSS 中引入字体图标 ？
  - 首先在 Unocss 插件中添加 presetIcons 预设 import { presetIcons } from "unocss";
  - 将使用的图标名加入到 safelist 中

## 创建示例功能的文档网站

- 如何配置 Vitepress 完成文档建设 ？
  - 添加依赖pnpm i vitepress@"0.22.4" -D
  - 创建docs/index.md
  - 添加启动脚本
  - 配置docs/.vitepress/config.ts进行菜单配置
- 如何在 vitepress 中引用 vue 组件？
  - 添加依赖pnpm i vitepress-theme-demoblock@"1.4.2" -D
  - 配置docs/.vitepress/config.ts 引入demoBlockPlugin插件
  - 在md中使用:::demo 内容 vue代码段 :::引入markdown 插槽 
- 什么是 markdown 插槽 ？
  - Markdown 的功能扩展 可以通过::: slot name ::: 的方式引入

## 单元测试(一)： 使用Jest进行前端单元测试

- 断言、分组都是什么
  - 分组：将某些规律看成是一组，然后进行组级别的重复
  - 断言是指明某个字符串前边或者后边，将会出现满足某种规律的字符串
- Mock函数的使用场景
  - 
- 如何使用DOM仿真进行前端测试