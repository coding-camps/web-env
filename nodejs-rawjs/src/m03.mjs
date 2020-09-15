import _ from 'lodash';

const info = function() {
    console.log('---------- 3 ES6');
    console.log(_.name + '@' + _.VERSION);
    console.log();
};

const info2 = function() {
    console.log("print message from 3");
    console.log();
}

export default info;
export {info2};