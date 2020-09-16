'use strict';
define(['jquery', 'text!/outmod/out.html'], function ($, out) {
  return {
    run: function () {
      console.log(out);
      $('#root').css('font-size', '1.5rem');
      // $('#root').html(out);
    },
  };
});
