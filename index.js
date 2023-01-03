// function getLongestPalindrome( str ) {
//     let max = 0
//     let map = new Map()
//     // write code here
//     for(let i = 0 ; i < str.length ; i++){
//         let n1 = str.indexOf(str[i])
//         let n2 = str.lastIndexOf(str[i])
//         let n = n2 - n1 
//         if(n > max){
//             max = n
//             map.set(max,[n1,n2])
//         }
//     }
//     let arr = map.get(max);
//     return str.slice(arr[0],arr[1]+1)
    
// }

// let str = 'cbeaeba'
// getLongestPalindrome(str)

console.log(typeof (1 + '2'))
console.log(typeof ('2' + 1))

let name = 'yt'
let obj = {
    aa: name
}
console.log(obj.aa);


// let a = 2
// let b = a 
// b=3
// console.log(a,b);

function is18(input){
  return input == { age: 18 };
}
console.log(is18({age: 16}));
console.log(is18({age: 18}));
console.log(is18({age: 17}));

console.log(!NaN,!Infinity);


function fla(arr){
  return arr.flat(Infinity)
}

function fla1(arr){
  return arr.toString().split(',').map(item => parseFloat(item))
}

function fla3(arr){
  let result = []
  for(let i = 0 ; i < arr.length ; i++){
    if(Array.isArray(arr[i])){
      result = result.concat(fla3(arr[i]))
    }else{
      result.push(arr[i])
    }
  }
  return result
}
