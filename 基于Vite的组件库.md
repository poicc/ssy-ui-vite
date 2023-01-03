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
- 怎样在 UnoCSS 中使用变量定制样式 ？
- 怎样在 UnoCSS 中引入字体图标 ？