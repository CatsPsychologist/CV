const path = require('path');

module.exports = {
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    entry: {
        index: './src/ts/index.ts',
    },
    output: {
        filename: 'index.js',
        path: __dirname + '/src/build',
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    // module: {
    //     rules: [
    //         {
    //             test: /\.m?ts$/,
    //             exclude: /(node_modules|bower_components)/,
    //             use: {
    //                 loader: 'babel-loader',
    //                 options: {
    //                     presets: ['@babel/preset-env']
    //                 }
    //             }
    //         }
    //     ],
    //
    // },

};