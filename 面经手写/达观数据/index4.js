console.log('datagrand1');

setTimeout(() => {

  console.log('datagrand2');

});

const p1 = new Promise(resolve => {

  console.log('datagrand3');

  resolve();

});

p1.then(() => {

  console.log('datagrand4');

});

console.log('datagrand5');

const p2 = new Promise(resolve => {

  console.log('datagrand6');

  resolve();

});

p2.then(() => {

  console.log('datagrand7');

});