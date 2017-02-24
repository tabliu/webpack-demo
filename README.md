# webpack-learning
webpack学习笔记和代码记录

## 安装
+ 首先要安装 Node.js， Node.js 自带了软件包管理器 npm，Webpack 需要 Node.js v0.6 以上支持，建议使用最新版 Node.js。

+ 通过npm安装项目可以在全局安装，也可以局部安装，建议同时安装。

	 `npm install webpack -g`

	这就是安装在你的USER全局之下，可以在全局环境调用到

	`npm install webpack --save -dev`

	这是基于你当前目录去安装webpack，这样的好处可以和本地项目的`package.json`建立依赖，直接通过require来调用。

+ 安装loader也要记得加`--save-dev`，否则会报错，为了找这个错误坑很久。

	 `npm install style-loader css-loader --save -dev`