
//Note: uncommand piece of code

// const string = "Hello siddhesh how are you";

// function reverseS(string){
//   let arrayofString = string.split(' ');
//   return arrayofString.map((word) => word.split('').reverse().join('')).join(' ');
// }

// console.log(reverseS(string));


// function type(input){
//     if(Array.isArray(input)){
//       return `It is array`;
//     }else{
//       return `It is object`;
//     }
// }

// console.log(type({}));
// console.log(type([]));

// function poping(array){
//   while(array.length !== 0){
//     array.pop();
//   }
//   return array;
// }

// let array = [1,2,3,4,57,9];

// console.log(poping(array));
 //OR

//  let array = [1,2,3,4,57,9];
//  array.length = 0;
//  console.log(array);
  //OR reset

  // array = [];

  // function check(num){
  //   if(num % 1 === 0){
  //     return `It is number`;
  //   }else{
  //     return `not`;
  //   }
  // }
  // console.log(check(5.4));

  // function duplicate(array){
  //   let newArray = [];
  //     for(let i=0;i<array.length;i++){
  //         newArray.push(array[i]);
  //     }
  //     return [...newArray,...array];
  // }

  // let array = [1,2,3,4,5];
  // console.log(duplicate(array));

  //OR

  // function duplicate(a){
  //     return a.concat(a);
  // }
  // let array = [1,2,3,4,5];
  // console.log(duplicate(array));


// function rev(num){
//   return parseInt(num.toString().split('').reverse().map(Number).join(''));
// }

// console.log(rev(234));

 //Or

//  function revv(num){
//   let rev = 0;
//    while(num>0){
//      let rem = num%10;
//      rev = rev*10+rem;
//      num = Math.floor(num/10);
//    }
//    return rev;
//  }
//  console.log(revv(23478));

// function palindromeCheck(string){
//     let str1 = string.toUpperCase();
//     let str2 = string.toUpperCase().split('').reverse().join('');

//     if(str1 === str2){
//       return `It is Palindrome`;
//     }else{
//       return `It is not a Palindrome`;
//     }
// }
// let string = "Radar";
// console.log(palindromeCheck(string));
