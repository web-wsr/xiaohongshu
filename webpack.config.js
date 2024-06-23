const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // 入口
    entry: path.resolve(__dirname, 'src/xiaohongshu/index.js'),
    // 出口
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './xiaohongshu/js/index.js',
        clean: true
    },
    // 插件
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html'), //模板
            filename: path.resolve(__dirname, 'dist/xiaohongshu/index.html')
        })
    ],
    // 加载器
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.less$/i,
                use: [
                    // compiles Less to CSS
                    'style-loader',
                    'css-loader',
                    'less-loader',
                ],
            },
            {
                test: /\.(png|jpeg|gif|webp|svg)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024 // 4kb
                    },
                },
                generator: {
                    filename: 'xiaohongshu/img/[hash:10][ext][query]',
                },
            },
            {
                test: /\.(ttf|woff2?)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'xiaohongshu/media/[hash:10][ext][query]',
                },
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                // options: {
                //     presets: ['@babel/preset-env'],
                // },
            },
        ],
    },
};