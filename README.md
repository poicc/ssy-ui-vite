<br>
<p align="center">
<img src="https://cdn.staticaly.com/gh/poicc/image@main/Snipaste_2023-01-07_10-26-24-removebg-preview.1eor1tajh880.webp" style="width:200px;" />
</p>
<h1 align="center">SSY-UI-VITE</h1>
<p align="center">
  基于 Vite 栈的前端工程化实践 
</p>

<p align="center">
<img src="https://img.shields.io/github/license/poicc/ssy-ui-vite?color=green">
<a href="https://codecov.io/gh/poicc/ssy-ui-vite" > 
 <img src="https://codecov.io/gh/poicc/ssy-ui-vite/branch/master/graph/badge.svg?token=ECAAIR953D&style=for-the-badge"/> 
 </a>
</p>


## Features

- 基于 Vue 框架
- 支持 JSX 与 Vue 单文件组件
- Jest + Vue3 plugins实现单元测试
- Eslint + Prettier + Husky 语法检查
- 采用 Rollup 构建
- Vitepress + Vercel 文档网站搭建
- 基于Action CI 实现持续集成与交付

## Install
```bash
 npm i ssy-ui-vite
```

## Quick Start
```bash
 import Vue from 'vue'
 import SSYUI from 'ssy-ui'

 const App = {
    template: `
      <SButton color="blue">主要按钮</SButton>
    `,
 };

 createApp(App)
   .use(SSYUI)
   .mount("#app");
```

## Quick Start
如果希望尽快上手，可以访问 [Getting Started](https://ssy-ui-vite-one.vercel.app/)

