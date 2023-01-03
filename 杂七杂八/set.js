
console.log('script start');

setTimeout(function () {
  console.log('setTimeout');
}, 0);

Promise.resolve()
  .then(function () {
    console.log('promise1');
  })
  .then(function () {
    console.log('promise2');
  });

console.log('script end');

//script start
//script end
//promise1
//promise2
//setTimeout


async function async1() {
    console.log('async1 start')
    await async2()
    console.log('async1 end')
  }


  async function async2() {
    console.log('async2')
  }

  console.log('script start')

  setTimeout(function () {
    console.log('setTimeout')
  }, 0)

  requestAnimationFrame(function () {
    console.log('requestAnimationFrame')
  })

  async1();

  new Promise(function (resolve) {
    console.log('promise1')
    resolve();
  }).then(function () {
    console.log('promise2')
  })

// script start 、 async1 start 、 async2 、 promise1 、 async1 end 、 promise2 、 setTimeout 、requestAnimationFrame


async function f1() {
    return new Promise((resolve) => {
      console.log(4)
      resolve()
    }).then(() => {
      console.log(5)
    })
  }


  async function run() {
    console.log(1)
    new Promise((resolve) => {
      console.log(2)
      resolve()
    }).then(() => {
      console.log(3)
    })
    await f1()
    // 阻塞后面的代码
    setTimeout(() => {
      console.log(6)
    }, 0)
    console.log(7)
  }

  run()

// 1 、 2 、 4 、 3 、 5 、7 、6