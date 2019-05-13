const { HotModuleReplacementPlugin } = require('webpack');
const merge = require('webpack-merge');
const { port } = require('config');

const common = require('./webpack.common');

module.exports = merge(common, {
    devServer: {
        contentBase: 'public',
        historyApiFallback: true,
        hot: true,
        overlay: true,
        port,
    },
    devtool: 'eval-source-map',
    mode: 'development',
    plugins: [new HotModuleReplacementPlugin()],
});
