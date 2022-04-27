const arr = ['a', 'b', 'c'];
const newArray = arr.reduce((origin, value) => {
  return [value, ...origin]
}, []);

console.log(arr); 
console.log(newArray); 