'use strict';
var can = require('can');

module.exports = can.Control.extend({
    init: function() {
        // load the template data with raw-loader, see webpack.conf.js for
        // details
        var template = require('../templates/root.stache');
        // register the data with id that can be then used as a view id
        can.view.mustache('rootTemplate',template);

        // some data
        var data = new can.Map({
            content: "Hello World"
        });

        // and render it to the element
        this.element.html( can.view('rootTemplate', data ));
    },
});
