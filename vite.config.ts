import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from '@vitejs/plugin-vue-jsx'
import Unocss from "./config/unocss";

const rollupOptions = {
  external: ["vue", "vue-router"],
  output: {
    globals: {
      vue: "Vue"
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
  vue(),
  // 添加JSX插件
  vueJsx({
    // options are passed on to @vue/babel-plugin-jsx
  }),
  // 添加UnoCSS插件
  Unocss(),
  ],

  //添加库模式配置
  build: {
    rollupOptions,
    minify: false,
    cssCodeSplit: true, // 在编译的时候是否要独立输出 css
    lib: {
      entry: "./src/entry.ts",
      name: "SSYUI",
      fileName: "ssy-ui",
      // 导出模块格式
      formats: ["esm", "umd", "iife"],
    }
  }
});