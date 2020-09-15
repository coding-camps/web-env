import _ from 'lodash';

const info = function() {
    console.log('---------- 2 ES6');
    console.log(_.name + '@' + _.VERSION);
    console.log();
};
const info2 = function() {
    console.log('print message from m2.info2()');
    console.log();
};

export { info, info2 };
