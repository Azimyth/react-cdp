const { merge } = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const common = require('./webpack.common.config.js');

module.exports = merge(common, {
    name: 'server',
    target: 'node',
    entry: './src/serverRenderer.js',
    externals: [nodeExternals()],
    output: {
        filename: 'serverRenderer.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.(s[ac]ss|css)$/i,
                include: /src/,
                use: ["css-loader", "sass-loader"]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'assets/'
                    },
                },
            },
        ],
    },
});