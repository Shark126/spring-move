// async function async1() {
//     console.log("async1 start");
//     await async2();
//     console.log("async1 end");
//     setTimeout(() => {
//       console.log('timer1')
//     }, 0)
//   }
//   async function async2() {
//     setTimeout(() => {
//       console.log('timer2')
//     }, 0)
//     console.log("async2");
//   }
//   async1();
//   setTimeout(() => {
//     console.log('timer3')
//   }, 0)
//   console.log("start")
  

  // async1 start
  // async2
  // start 
  // async1 end 
  // timer2
  // timer3
  // timer1

//   async function async1 () {
//     console.log('async1 start');
//     await new Promise(resolve => {
//       console.log('promise1')
//     })
//     console.log('async1 success');
//     return 'async1 end'
//   }
//   console.log('srcipt start')
//   async1().then(res => console.log(res))
//   console.log('srcipt end')

 // srcipt start
 // async1 start
 // promise1
 // srcipt end

//  async function async1 () {
//     console.log('async1 start');
//     await new Promise(resolve => {
//       console.log('promise1')
//       resolve('promise1 resolve')
//     }).then(res => console.log(res))
//     console.log('async1 success');
//     return 'async1 end'
//   }
//   console.log('srcipt start')
//   async1().then(res => console.log(res))
//   console.log('srcipt end')

  // srcipt start
  // async1 start
  // promise1
  // srcipt end
  // promise1 resolve
  // async1 success
  // async1 end

//   async function async1 () {
//     console.log('async1 start');
//     await new Promise(resolve => {
//       console.log('promise1')
//       resolve('promise resolve')
//     })
//     console.log('async1 success');
//     return 'async1 end'
//   }
//   console.log('srcipt start')
//   async1().then(res => {
//     console.log(res)
//   })
//   new Promise(resolve => {
//     console.log('promise2')
//     setTimeout(() => {
//       console.log('timer')
//     })
//   })
  
  //srcipt start
  //async1 start
  //promise1
  //promise2
  //async1 success
  //async1 end
  //timer


// ????????????
//   async function async1() {
//     console.log("async1 start");
//     await async2();
//     console.log("async1 end"); // w1
//   }
  
//   async function async2() {
//     console.log("async2");
//   }
  
//   console.log("script start");
  
//   setTimeout(function() {
//     console.log("setTimeout");
//   }, 0);
  
//   async1();
  
//   new Promise(function(resolve) {
//     console.log("promise1");
//     resolve();
//   }).then(function() {
//     console.log("promise2"); //w2
//   });
//   console.log('script end')
  // script start
  // async1 start
  // async2
  // promise1 
  // script end
  // async1 end
  // promise2
  // setTimeout



  async function testSometing() {
    console.log("??????testSometing");
    return "testSometing";
  }
  
  async function testAsync() {
    console.log("??????testAsync");
    return Promise.resolve("hello async");
  }
  
  async function test() {
    console.log("test start...");
    const v1 = await testSometing();
    console.log(v1);
    const v2 = await testAsync();
    console.log(v2);
    console.log(v1, v2);
  }
  
  test();
  
  var promise = new Promise(resolve => {
    console.log("promise start...");
    resolve("promise");
  });
  promise.then(val => console.log(val));
  
  console.log("test end...");
  
// test start...
// ??????testSometing