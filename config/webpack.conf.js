'use strict';

module.exports = {
    cache: true,
    stats: true,
    module: {
        loaders: [
            {
                test: /\.stache$/,
                loader: 'raw'
            }
        ]
    },
    resolve: {
        modulesDirectories: [
            'src',
            'node_modules/can/dist/cjs/',
            'node_modules',
        ],
        extensions: ['', '.js']
    }
};
