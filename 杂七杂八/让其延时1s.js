// setTimeout(() => {
//   setTimeout(() => {
//     console.log(1);
//   }, 1000);
// }, 1000);

// const promise = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve()
//   },1000)
// })

// promise.then(
//   setTimeout(()=>{
//     console.log(1);
//   },1000)
// )

function wait(){
  setTimeout(()=>{

  },1000)
}

async function waitTime(){
  await wait()
  setTimeout(() => {
    console.log(1);
  }, 1000);
}

waitTime()