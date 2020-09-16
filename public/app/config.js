'use strict';
require.config({
  baseUrl: '/app',
  paths: {
    jquery: 'libs/jquery-3.6.0',
    underscore: 'libs/underscore-1.13.3/underscore-umd-min',
    backbone: 'libs/backbone-1.4.0',
    handlebars: 'libs/handlebars-v4.7.7',
    text: 'libs/requirejs-plugin-text-2.0.16',
    i18n: 'libs/requirejs-plugin-i18n-2.0.6',
    domReady: 'libs/requirejs-plugin-domReady-2.0.1',
    _str: 'libs/underscore.string-3.3.4',
    bootstrap: 'libs/bootstrap/bootstrap.bundle',
  },
  shim: {
    jquery: {
      exports: 'jQuery',
    },
    underscore: {
      exports: '_',
    },
    backbone: {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone',
    },
    handlebars: {
      deps: ['jquery'],
      exports: 'Handlebars',
    },
    text: {
      deps: ['require'],
    },
    i18n: {
      deps: ['require'],
    },
    bootstrap: {
      deps: ['jquery'],
      exports: 'boots',
    },
    _str: {
      deps: ['underscore'],
      exports: '_s',
    },
  },
});
