// 面试
// 题目一描述
// var value = 2;
//   var myObj = { value: 3 };  
//   var add = function(a, b){ return a + b; };  
//   myObj.double = function () {  
//       var helper = function(){  
//           this.value = add(this.value,this.value);  
//           console.log(this.value)  
//       };  
//       helper();
//   };  

//   myObj.double();

//  1. 请给出题目的输出结果 // undefined
//  2. 如何让输出结果是 6
// var value = 3;
//   var myObj = { value: 3 };  
//   var add = function(a, b){ return a + b; };  
//   myObj.double = function () {  
//       var helper = function(){  
//           this.value = add(value,value);  
//           console.log(this.value)  
//       };  
//       helper();
//   };  

//   myObj.double(); 


// 题目二描述
// 给定一个整数数组，实现一个函数将数组翻转。
// 样例输入: [5, 4, 3, 2, 1]
// 样例输出: [1, 2, 3, 4, 5]
// var fanzhuan  = function(arr){
//     let len = arr.length
//     let newArr = []
//     for(let i = len - 1 ; i >=0 ; i--){
//         newArr.push(arr[i])
//     }
//     return newArr
// }



// 题目三描述

// 有一个长度为n的字符串A（n可能很大，即如果要分配与n相当的buffer则要考虑空间复杂度问题），其中的字符是乱序的，请写一个简单的算法，让字符串中不包含任何连续重复的字符，并使该字符串长度尽可能短。

// 限定条件：

// 1、只能在A上直接操作；

// 2、剩下的字符要保持原有的顺序不变。

// 输入

// 一个字符串（对Java或Objective-C来说可用char []数组）

// 输出

// 不包含任何连续重复字符的字符串，并使字符串长度尽可能短

// 题目限制

// 时间限制：C/C++语言 1000MS；其他语言 3000 MS
// 内存限制：C/C++语言 65536KB；其他语言 589824KB

// 样例输入: abcdefggggfedcbc
// 样例输出: ac
