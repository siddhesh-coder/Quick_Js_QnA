
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

// const string = "Siddhesh";

// function countAdd(string){
//     let low = string.toLowerCase();
//     let arrayOfString = low.split('');
//     let compressed = "";
//     let newArray = arrayOfString.reduce((acc,i) =>{
//       if(!acc[i]){
//         acc[i] = 1;
//       }else{
//         acc[i]++;
//       }
//       return acc;
//     },{});

//     for(const key in newArray){
//       compressed += `${key}${newArray[key]}`;
//     }
//     return compressed;
// }

// console.log(countAdd(string));

// function miniMaxSum(arr) {
//   // Write your code here
//    arr.sort((a,b)=>{
//      return a-b;
//   });
//   let minSum = 0;
//   let maxSum = 0;
//   for(let i=0;i<arr.length-1;i++){
//       minSum += arr[i]; 
//   }

//   for(let i=1;i<arr.length;i++){
//       maxSum += arr[i];
//  }
  
// return `${minSum} ${maxSum}`;
// }

// let array = [140638725,436257910,953274816,734065819,362748590];
// console.log(miniMaxSum(array));

// const nums1 = [1,2,2,1];
// const nums2 = [2,2];

// var intersection = function(nums1, nums2) {
//   const set1 = new Set(nums1);
//     const result = new Set();

//     for (const num of nums2) {
//         if (set1.has(num)) {
//             result.add(num);
//         }
//     }

//     return Array.from(result);
// }

// console.log(intersection(nums1,nums2));  //resolve the output should be [1,2]

// var reverseStr = function(s, k) {
//   let newStr = s.split('');
//   for(let i=0;i<newStr.length;i+=2*k){
//      let start = i;
//     let end = Math.min(i + k - 1, newStr.length - 1);

//     while (start < end) {
//       [newStr[start], newStr[end]] = [newStr[end], newStr[start]];
//       start++;
//       end--;
//     }
//   }
//   return newStr.join('');
// };

// let s = "abcdefg";
// let k = 2;

// console.log(reverseStr(s,k));


// function sortt(s){
//   return s.split('').sort().join('');
// }

// const s = "siddhesh";

// console.log(sortt(s));

// function upper(s){
//   // let capStr = s.split(' ').map((word) => {
//   //     let letter = word.split('');
//   //     letter[0] = letter[0].toUpperCase();
//   //     return letter.join('');
//   //  });
//   //  return capStr.join(' ');

//    //Or
//    //optimize
//    let allwords = s.split(' ').map((word)=>{
//       return word.charAt(0).toUpperCase() + word.substring(1);
//    })
//    return allwords.join(' ');
// }

// let string = "Hey, how is everything going on?";

// console.log(upper(string));



// function count(s){
//    const newObj = s.split('').reduce((acc,i)=>{
//          if(!acc[i]){
//           acc[i] = 1;
//          }else{
//           acc[i]++;
//          }
//          return acc;
//    }, {});
//    return newObj;
// }

// const string = "Apple";

// console.log(count(string));


// function loop(a){
//   const sum = a.reduce((acc,i)=>{
//      acc += i;
//      return acc;
//   },0);
//   return sum;
// };

// const array = [1,2,3,4,5];

// console.log(loop(array));


// function takeNum(a){
//    const sum = a.reduce((acc,i)=>{
//       if(typeof i !== 'string'){
//          acc += i;
//       }
//       return acc;
//    },0); 
//    return sum;
// }
// const array = ['let',2,'const',4,'var',9];
// console.log(takeNum(array));



// function grab(a){
//     let males = a.filter((obj) => {
//         if(obj.gender === 'male'){
//           return obj;
//         }
//     });
//     return males;

//     //using loop

//     // let newArr = [];
//     // a.forEach(element => {
//     //   if(element.gender === 'male'){
//     //          newArr.push(element);
//     //   }
//     // });
//     // return newArr;
// };

// const arrayOfObj = [{
//   name: "siddhesh",
//   gender: "male",
//   city: "Pune"
// },{
//   name: "Shubham",
//   gender: "male",
//   city: "Pune"
// },{
//   name: "Kaira",
//   gender: "female",
//   city: "Pune"
// },{
//   name: "Ishani",
//   gender: "female",
//   city: "Pune"
// }]

// console.log(grab(arrayOfObj));


//solved with prototype

// Array.prototype.clone = function(){
//     return [...this];
// };

// let array = [1,2,3,4,5];
// let array2 = array.clone();
// console.log(array2);


// function checkType(input){
//     return typeof input;
// }

// console.log(checkType(String));

//from first 
// function returnElement(array,n = 1){
//   if(n > array.length){
//     return `exceed the range ${array.length}`;
//   }
//    let give = [];
//    for (let index = 0; index < n; index++) {
//     give.push(array[index]);
//    }
//    return give;
// }
// const array = [1,2,3,4,5,6];

// console.log(returnElement(array,4));

//from last
// function returnElement(array,n = 1){
//   if(n > array.length){
//     return `exceed the range ${array.length}`;
//   }
//    let give = [];
//    for (let index = array.length-1; index > n; index--) {
//     give.push(array[index]);
//    }
//    return give;
// }
// const array = [1,2,3,4,5,6];

// console.log(returnElement(array,3));


// function frequentItem(array){
//    let obj = array.reduce((acc,i)=>{
//      if(!acc[i]){
//       acc[i] = 1;
//      }else{
//       acc[i]++;
//      }
//      return acc;
//    },{});
   
//    let maxCount = 0;
//    let frequentElement = null;
//    for(const key in obj){
//      if(maxCount < obj[key]){
//       maxCount = obj[key];
//       frequentElement = key;
//      }
//    }
//    return frequentElement;
// }
// const array = [1,1,5,5,6,3,2,5,1,1];
// console.log(frequentItem(array));

//shuffle of array
// Array.prototype.shuffle = function(){
//      let index = this.length;

//      while(index > 0){
//        index--;
//        let randomIndex = Math.floor(Math.random() * index);
//        temp = this[index];
//        this[index] = this[randomIndex];
//        this[randomIndex] = temp;
//      }
//      return this;
// }

// let array = [1,2,3,4,5,6];

// console.log(array.shuffle());

// Array.prototype.union = function(){
//      let set = new Set();

//      this.forEach((element)=>{
//         element.forEach((element2)=>{
//           if(!set.has(element2)){
//               set.add(element2);
//           }
//         });
//      });
//      return Array.from(set).sort((a,b) => a-b);
// }

// let array = [[1,2,3,4],[100,2,3,50],[9,4,1,6,4],[900,23,54,67,2,67]];

// console.log(array.union());
