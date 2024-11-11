const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config');

const config = {
    mode: 'development',
    output: {
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: '[name]__[local]',
                                // namedExport: true, case 1;
                                namedExport: false,
                            },
                        },
                    },
                ],
            },
            {
                test: /\.(js|ts)x?$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react',  '@babel/preset-typescript'],
                        },
                    },
                ],
            },
        ],
    },
    devServer: {
        port: 3000,
    },
};

module.exports = merge(baseConfig, config);