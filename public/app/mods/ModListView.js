define([
  'core/View',
  'jquery',
  'backbone',
  'underscore',
  'handlebars',
  'text!mods/ListView.html',
], function (View, $, Backbone, _, Handlebars, template) {
  'use strict';
  console.log('jquery = ', $.fn.jquery);
  console.log('Backbone =', Backbone.VERSION);
  console.log('underscore =', _.VERSION);
  return View.extend({
    template: Handlebars.compile(template),
    el: '#mod-list',
    initialize: function () {
      View.prototype.initialize.apply(this, arguments);
    },
  });
});
