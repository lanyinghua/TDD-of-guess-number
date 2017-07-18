'use strict';
//1234567890
function toarr(num) {
    var numstr=String(num);
    var fir=parseInt(numstr.slice(0,1));
    var sec=parseInt(numstr.slice(1,2));
    var thir=parseInt(numstr.slice(2,3));
    var forth=parseInt(numstr.slice(3));
    var numarr=[fir,sec,thir,forth];
    return numarr;
}

function guessNumber(num) {
    var numarr = toarr(num)
    var howmanyA=0;
    var howmanyB=0;
    // if (1===numarr[0]){
    //     howmanyA+=1
    // }else if (1===numarr[1]){
    //     howmanyB+=1
    // }else if (1===numarr[2]){
    //     howmanyB+=1
    // }
    for (var i=1;i<=4;i++){
        for (var j=0;j<4;j++){
            if (i===numarr[i-1]){
                howmanyA+=1;
                break;
            }else if (i===numarr[j]){
                howmanyB+=1;
            }
        }
    }
    var result = howmanyA+'A'+howmanyB+'B'
    return result;
}
console.log(guessNumber(1256))
