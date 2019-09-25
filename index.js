'use strict';

var path = require('path');

module.exports = {
  rules: {
    'no-vue': function(context) {
      return {
        Program: function(node) {
          if (path.extname(context.getFilename()) === '.vue') {
            context.report(node, 'No Vue.js in this project!');
          }
        },
      };
    },
  },
};