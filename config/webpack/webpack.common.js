const path = require('path');

const ConfigWebpackPlugin = require('config-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './index.js',
    module: {
        rules: [
            {
                exclude: /(node_modules|bower_components)/,
                test: /\.js$/,
                use: ['babel-loader'],
            },
        ],
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '..', '..', 'public', 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '..', '..', 'public', 'index.html'),
        }),
        new ConfigWebpackPlugin(),
    ],
};
