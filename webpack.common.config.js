const path = require('path');
const LoadablePlugin = require('@loadable/webpack-plugin')

module.exports = {
    mode: process.env.NODE_ENV,
    output: {
        filename: 'js/[name].js',
        path: path.resolve('./public'),
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            'react-dom': '@hot-loader/react-dom',
        },
    },
    plugins: [
        new LoadablePlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.js|\.jsx$|\.json$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ]
                    }
                }
            }
        ],
    },
};