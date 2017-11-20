
var path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MODULE_PATHS = [
    path.join(__dirname, 'node_modules'),
    path.join(__dirname, 'src'),
    'node_modules',
    'src'
];



module.exports = merge(common, {
    devtool: 'inline-source-map',


    module: {

        rules: [
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit:2000,
                            name: "assets/[hash].[ext]",
                            sourceMap: true
                        }
                    }
                ]
            }
            , {
                test: /\.(css|scss|sass)$/,
                use: [{
                    loader: 'style-loader',
                    options: {
                        sourceMap: true,
                        singleton: true
                    }
                }, {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true,
                        modules: true
                    }
                }, {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: true,
                    }
                }, {
                    loader: 'resolve-url-loader',
                    options: {sourceMap: true}
                }, {
                    loader: 'sass-loader',
                    options: {
                        includePaths: MODULE_PATHS,
                        sourceMap: true
                    }
                }]
            }




        ]
    }
});