const promise = new Promise((resolve, reject) => {
    console.log(1);
    setTimeout(() => {
      console.log("timerStart");
      resolve("success");
      console.log("timerEnd");
    }, 0);
    console.log(2);
  });
  promise.then((res) => {
    console.log(res); //由于第一次时的状态还是pending，所以认为是不执行
  });
  console.log(4);

  // 1  2  4  timeStart timerEnd  success