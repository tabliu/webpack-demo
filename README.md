# webpack-learning
webpack学习笔记和代码记录

-------------------------------

## 安装
+ 首先要安装 Node.js， Node.js 自带了软件包管理器 npm，Webpack 需要 Node.js v0.6 以上支持，建议使用最新版 Node.js。

+ 通过npm安装项目可以在全局安装，也可以局部安装，建议同时安装。

   `npm install webpack -g`

   这就是安装在你的USER全局之下，可以在全局环境调用到

   `npm install webpack --save -dev`

   这是基于你当前目录去安装webpack，这样的好处可以把webpack配置到本地项目的`package.json`。

+ 安装loader也要记得加`--save-dev`，否则会报错，为了找这个错误坑很久。

   `npm install style-loader css-loader --save -dev`

-------------------------------

## 使用
### 配置

* 理解entry和output的含义，尤其是打包后的bundle.js。

  `entry` ： js 文件引用的入口， 一般每个 entry 的属性对应一个文件；

  `output` ： 生成文件的出口, 主要是 `path` 和 `filename` 两个属性：`path` 可是相对路径，也可以是绝对路径；`filename` 用来配置生成的文件名，可以是各种组合，比如 [hash] 用于生成 带Hash值的名称；


* 创建`webpack.config.js`文件并进行必要的配置：
  <pre>
  <code>
  var webpack = require('webpack')
  var path = require('path');
  var ROOT_PATH = path.resolve(__dirname);

module.exports = {
    entry: './src/js/entry.js',
    output: {
        path: __dirname,
        filename: './dist/bundle.js'
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }]
    },
    plugins: [
        new webpack.BannerPlugin('This file is created by tabliu')
    ]
}

</code>
</pre>

-------------------------------

## 参考文档
* [webpack官方文档](http://webpack.github.io/docs/)
* [webpack指南](https://webpack.toobug.net/zh-cn/index.html)
* [关于简聊 Webpack 配置的一些注释](http://www.tuicool.com/articles/uQfmqie)
* [webpack入门系列](http://www.cnblogs.com/erduyang/p/5603971.html)