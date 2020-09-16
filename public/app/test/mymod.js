'use strict';
define(['jquery', 'text!test/mymod.html'], function ($, mymod) {
  return {
    run: function () {
      console.log('My own module x loading successfully~!');
      $('body script').each(function (i, e) {
        console.log(i, e);
      });
      console.log(mymod);
      $('#root').html(mymod);
    },
  };
});
