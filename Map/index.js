const map = new Map([
    ['foo',1],
    ['bar',2],
    ['arr',3]
])
var a = map.size
var b = map.has('foo')
map.set('hh',4)
console.log(map);

console.log(a);
console.log(b);