/// <reference types="vitest" />
import { defineConfig, Plugin, Plugin_2 } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import UnoCss from "./config/unocss";
import { UserConfig } from "vitest";
import dts from "vite-plugin-dts"

const rollupOptions = {
  external: ["vue"],
  output: {
    globals: {
      vue: "Vue",
    },
  },
};

export const config = {
  plugins: [
    vue() as Plugin_2,
    vueJsx() as Plugin_2,
    UnoCss() as Plugin_2[],
    dts({
      outputDir: "./dist/types",
      insertTypesEntry: false, // 插入 ts 入口
      copyDtsFiles: true // 是否将源码里的 .d.ts文件复制到outputDir
    })
  ],
  build: {
    rollupOptions,
    minify: `terser`, // boolean | 'terser' | 'esbuild'
    sourcemap: true, // 输出单独 source文件
    brotliSize: true, // 生成压缩大小报告
    cssCodeSplit: false,
    lib: {
      entry: "./src/entry.ts",
      name: "SSYUI",
      fileName: "ssy-ui",
      formats: ["esm", "umd", "iife"], // 导出模块类型
    },
    outDir: "./dist",
  },
  test: {
    // enable jest-like global test APIs
    globals: true,
    // simulate DOM with happy-dom
    // (requires installing happy-dom as a peer dependency)
    environment: 'happy-dom',
    // 支持tsx组件，很关键
    transformMode: {
      web: [/.[tj]sx$/],
    },
    coverage: {
      provider: "istanbul", // or 'c8',
      reporter: ["text", "json", "html"],
    },
  },

};

// https://vitejs.dev/config/
export default defineConfig(config as UserConfig);