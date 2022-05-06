const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    resolve("success");
  });
console.log("start");
fn().then(res => {
  console.log(res);
});

// start  1 success
// 像这种被包裹在函数里的情况，要等函数调用的时候才会去执行它