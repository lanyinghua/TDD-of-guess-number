'use strict';
//indexOf use
function fizzBuzzWhizz(number) {
    number=String(number);
    if (number.indexOf('3')!== -1){
        return 'Fizz';
    }else if (number.indexOf('3')===-1){
        number = parseInt(number);
        if (number%3===0){
            if(number%5===0){
                return 'FizzBuzz';
            }else if(number%7===0){
                return 'FizzWhizz';
            }else{
                return 'Fizz';
            }
        }else if (number%5===0){
            if(number%7===0){
                return 'BuzzWhizz';
            }else{
                return 'Buzz';
            }

        }else if (number%7===0){
            return 'Whizz'
        }else{
            return number;
        }
    }
}

// console.log(fizzBuzzWhizz(35))

//--------finished main & main-test in around 40min------
