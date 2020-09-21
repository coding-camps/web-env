'use strict';
require([
  'jquery',
  'underscore',
  'backbone',
  'text',
  'domReady',
  'handlebars',
  'i18n',
  '_str',
  'bootstrap',
  'test/mymod',
  // '/outmod/out',
], function (
  $,
  _,
  Backbone,
  text,
  domReady,
  handlebars,
  i18n,
  _str,
  boots,
  testmymod,
  // out,
) {
  console.log('loading successfully~!');
  console.log('require = ', require.version);
  console.log('jquery = ', $.fn.jquery);
  console.log('underscore =', _.VERSION);
  console.log('Backbone =', Backbone.VERSION);
  console.log('handlebars = ', handlebars.VERSION);
  console.log('text = ', text.version);
  console.log('i18n = ', i18n.version);
  console.log('domReady =', domReady.version);
  console.log('_str = ', _str.VERSION);
  console.log('bootstrap = ', boots.Alert.VERSION, boots.Button.VERSION);
  testmymod.run();
  // out.run();
  // Backbone.history.run();
  console.log(Backbone.history.start());
  $('body script').each(function (i, e) {
    console.log(i, e);
    // e.remove();
  });
});
