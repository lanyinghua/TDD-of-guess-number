 var array1 = [1,[2],[[3]],[[[4]]]]

function flatterArray(arr,torf) {
   if (!torf){
       var arr=arr.join('.').split('.');
       for (let i=0;i<arr.length;i++){
           arr[i]=parseInt(arr[i]);
       }
   }else if (torf===true){
       return 0;
   }
    return arr;
}

 console.log(flatterArray(array1,true))

 // var a='1234'
 // a=a.split('')
 // console.log(a)   //[ '1', '2', '3', '4' ]