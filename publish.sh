#!/usr/bin/env bash
npm config get registry
npm config set registry=https://registry.npmjs.org
echo '请进行 npm 登录操作：'
npm login
echo '--------publishing-----------'
npm publish
npm config set registry=https://registry.npm.taobao.org
echo '发布完成'
exit