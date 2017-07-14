'use strict';
//indexOf use
function fizzBuzzWhizz(number) {
    number=String(number);
    if (number.indexOf('3')!== -1){
        return 'Fizz';
    }else if (number.indexOf('3')===-1){
        number = parseInt(number);
        if (number%3!==0 && number%5!==0 && number%7!==0){
            return number;
        }else if (number%3===0 && number%5!==0 && number%7!==0){
            return 'Fizz';
        }else if (number%3!==0 && number%5===0 && number%7!==0){
            return 'Buzz';
        }else if (number%3!==0 && number%5!==0 && number%7===0) {
            return 'Whizz';
        }else if (number%3===0 && number%5===0 && number%7!==0) {
            return 'FizzBuzz';
        }else if (number%3===0 && number%5!==0 && number%7===0) {
            return 'FizzWhizz';
        }else if (number%3!==0 && number%5===0 && number%7===0) {
            return 'BuzzWhizz';
        }
    }
}

// console.log(fizzBuzzWhizz(84))

//--------finished main & main-test in around 40min------
