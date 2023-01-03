// 摸鱼项目目录
Promise.resolve(11).then(function(value){
    console.log(value);
})


function testPromise(ready){
    return new Promise(function(resolve,reject){
        if(ready){
            resolve('hello  world')
        }else{
            reject('No thanks')
        }
    })
}

testPromise(false).then(function(value){
    console.log(value);
},function(error){
    console.log(error);
})


const test2 = new Promise(function(resolve,reject){
console.log(1);
  resolve('success')
  console.log(2);
})

test2.then(function(value){
    console.log(value);
})


 