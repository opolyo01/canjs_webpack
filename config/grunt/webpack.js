'use strict';

var webpack = require('webpack'),
    options = require('../webpack.conf');

module.exports = function () {

    return {
        options: options,
        app: {
            context: 'src/',
            devtool: 'sourcemap',
            entry: {
                app: 'index.js',
                vendor: ['can']
            },
            output: {
                path: './target',
                filename: 'example.js',
            },
            plugins: [
                new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
            ]
        }
    };
};
