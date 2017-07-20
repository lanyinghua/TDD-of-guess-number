
//1234567890
function getRandomNum(min,max) {
    var range =max-min;
    var numarr=[];
    while (numarr.length<4){
        var randomNumber = Math.floor(Math.random()*range);
        if (numarr.indexOf(randomNumber)<0){
          numarr.push(randomNumber.toString());
        }
    }
    return numarr;
}
// console.log(getRandomNum(0,9));
// let readlineSync = require('readline-sync');
// let input = readlineSync.question('Please input 4 numbers !');
// console.log(input);


var readline = require('readline-sync');
function getUserNum() {
    var usernumarr=readline.question('Writedown four numbers.(e.g.1234)');
    usernumarr=usernumarr.toString().split('');
    return usernumarr;
}
// console.log(getUserInput())

function guessNumber() {
    var numarr = getRandomNum(0,9);
    var usernumarr = getUserNum();
    var countA=0;
    var countB=0;
    for (var i=0;i<4;i++){
        for (var j=0;j<4;j++){
            if (numarr[i]===usernumarr[i]){
                countA+=1;
                break;
            }else if (numarr[i]===usernumarr[j]){
                countB+=1;
            }
        }
    }
    var result = countA+'A'+countB+'B'
    return result;
}
console.log(guessNumber())


const obj_getRandomNum = {
    method: getRandomNum
}
const obj_getUserNum = {
    method : getUserNum
}
module.exports.obj_getRandomNum = obj_getRandomNum;
module.exports.obj_getUserNum = obj_getUserNum;
module.exports.guessNumber = guessNumber;


