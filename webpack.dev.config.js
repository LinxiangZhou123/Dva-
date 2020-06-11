const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config.js');
const path = require("path")
const webpack = require("webpack")
module.exports = merge(baseConfig, {
    // 设置为开发模式
    mode: 'development',
    devtool: 'inline-source-map',
    entry: [
        "react-hot-loader/patch",
        path.resolve(__dirname, "./src/index.js")
    ],
    resolve: {
        alias: {
            "react-dom": "@hot-loader/react-dom"
        }
    },
    // 配置服务端目录和端口
    devServer: {
        contentBase: './dist',
        historyApiFallback: true,
        // host:"192.168.1.150",
        port:8080,
        // hot: true,
        hot: true,
        proxy: {
            "/api": {
                "target": "http://192.168.191.10:8010",
                "changeOrigin": true,
                // "pathRewrite": {
                //     "^/api": "/"
                // }
            },
            "/navy": {
                "target": "http://192.168.1.252:8030",
                "changeOrigin": true,
                "pathRewrite": {
                    "^/navy": "/"
                }
            },
        },
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});
