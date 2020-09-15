/**
 * This is a module as CMD.
 * @module m01
 * @requires lodash
 * @exports 
 */

let _ = require('lodash');

let info = function() {
    console.log('---------- 1 CommonJs');
    console.log(_.name + '@' + _.VERSION);
    console.log();
};

let info2 = function() {
    console.log('show message by m01.info2()');
    console.log();
};

module.exports = {
    info, info2
}
