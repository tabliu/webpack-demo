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
