/**
 * Created by huadu on 7/19/17.
 */
var main = require('./main');
var sinon = require('sinon');
var objofran = main.obj_getRandomNum ;
var objofuser = main.obj_getUserNum ;
// console.log(obj.method(0,9))

function case0A0B() {
    let stubofran = sinon.stub(objofran, 'method').returns(['1','2','3','4']);
    let stubofuser = sinon.stub(objofuser,'method').returns(5678);

    let actualResult = main.guessNumber ();
    let expectedResult = '0A0B';
    if (actualResult===expectedResult){
        return `test passed 0A0B`
    }else {
        return `error`
    }
}

console.log(case0A0B())

/*Writedown four numbers.(e.g.1234)5678
1A1B
Writedown four numbers.(e.g.1234)5678
error*/
