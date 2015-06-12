'use strict';

module.exports = {
    'test': [
        'jshint',
        'lesslint'
    ],

    'core': [
        'test',
        'build',
        'copy'
    ],

    'build':  [
        'less',
        'webpack'
    ],

    'default': [
        'core',
        'connect',
        'watch'
    ]
};
