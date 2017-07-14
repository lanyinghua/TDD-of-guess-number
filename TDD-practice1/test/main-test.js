'use strict';

describe('fizzBuzzWhizz', ()=> {
    it('If the number contains number 3, return ‘Fizz’ in hundred.',()=>{
      //Given the number contains 3
    var num = 13;
    var actualResult = fizzBuzzWhizz (num);
    var expectedResult = 'Fizz';
    expect(actualResult).toEqual(expectedResult);
     })

    it ('If a number is not times of 3, 5, or 7,return the numbers.',()=>{
    var num = 1 ;
    var actualResult = fizzBuzzWhizz (num);
    var expectedResult = num;
    expect(actualResult).toEqual(expectedResult);
    })

    it ('If a number is times of 3 ,but not times of 5 or 7,return ‘Fizz’',()=>{
    var num = 3 ;
    var actualResult = fizzBuzzWhizz (num)
    var expectedResult = 'Fizz';
    expect(actualResult).toEqual(expectedResult);
    })

    it ('If a number is only times of 5 ,return ‘Buzz’',()=>{
    var num = 5 ;
    var actualResult = fizzBuzzWhizz (num)
    var expectedResult = 'Buzz';
    expect(actualResult).toEqual(expectedResult);
    })

    it ('If a number is only times of 7 ,return ‘Whizz’',()=>{
    var num = 7 ;
    var actualResult = fizzBuzzWhizz (num)
    var expectedResult = 'Whizz';
    expect(actualResult).toEqual(expectedResult);
    })

    it ('If a number is times of 3 and 5 ,return ‘FizzBuzz’',()=>{
    var num = 15 ;
    var actualResult = fizzBuzzWhizz (num)
    var expectedResult = 'FizzBuzz';
    expect(actualResult).toEqual(expectedResult);
    })

    it ('If a number is times of 3 and 7 ,return ‘FizzWhizz’',()=>{
    var num = 21 ;
    var actualResult = fizzBuzzWhizz (num)
    var expectedResult = 'FizzWhizz';
    expect(actualResult).toEqual(expectedResult);
    })

    it ('If a number is times of 5 and 7 ,return ‘BuzzWhizz’',()=>{
    var num = 70 ;
    var actualResult = fizzBuzzWhizz (num)
    var expectedResult = 'BuzzWhizz';
    expect(actualResult).toEqual(expectedResult);
    })
})

