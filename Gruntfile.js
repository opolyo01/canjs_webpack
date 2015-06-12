'use strict';

var path = require('path');
var config = require('load-grunt-config');

module.exports = function (grunt) {
    config(grunt, {
        configPath: path.join(process.cwd(), 'config', 'grunt'),
        data: {
            pkg: grunt.file.readJSON('package.json'),
        },
    });

    require('time-grunt')(grunt);
};
