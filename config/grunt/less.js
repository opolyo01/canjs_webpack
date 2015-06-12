'use strict';

module.exports = {
    all: {
        options: {
            paths: ['src/styles'],
            relativeUrls: true,
            rootPath: '/'
        },
        files: {
            'target/example.css': 'src/styles/*.less'
        }
    }
};
