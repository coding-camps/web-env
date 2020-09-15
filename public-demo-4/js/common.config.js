require.config({
    //baseUrl: '../boot',
    paths:{
        'jquery': '../lib/jquery',
        'backbone': '../lib/backbone',
        'underscore': '../lib/underscore',
        'handelbars': '../lib/handlebars',
            'myjsx': '../js/jsx'
    },
    shim:{
        'jquery': {
            exports: 'jQuery'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'underscore': {
            deps: ['jquery'],
            exports: '_'
        },
        'lib/handlebars': {
            deps: ['jquery'],
            exports: 'Handlebars'
        },
        'myjsx': {
            deps: ['jquery'],
            exports: 'jsxModel'
        }
    }
})