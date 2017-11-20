const path = require('path');
var babelLoader = {
    loader: 'babel-loader',
    options: {
        cacheDirectory: true,
        presets: [
            "react",
            [
                "es2015",
                {
                    "modules": false
                }
            ],
            "es2016"
        ]
    }
};

module.exports = {
    entry: './app/Main.ts',


    module: {

        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    babelLoader,
                    {
                        loader: 'ts-loader',
                        options: {transpileOnly: true}
                    }
                ]
            }, {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    babelLoader
                ]
            }]
    },
    resolve: {
        modules: [__dirname, 'node_modules'],
        extensions: [".tsx", ".ts", ".js"],
        alias: {
            'images': path.resolve(__dirname, './app/resource/images'),
            'css': path.resolve(__dirname, './app/resource/css'),
            'font': path.resolve(__dirname, './app/resource/font'),
            'fontawesome': path.resolve(__dirname, './app/resource/fontawesome'),
            'bootstrap': path.resolve(__dirname, './app/resource/bootstrap')
        }
    },
    output: {
        filename: 'bundle.js',
        path: __dirname
    }
};