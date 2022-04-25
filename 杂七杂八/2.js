var abc = function(){
    console.log('123');
}

var nn = [1,2,3]
var bb = '年后'
var aa = {
    a: 1,
    b: 2
}

console.log(abc.toString);
console.log(nn.toString);
console.log(aa.toString);
console.log(Object.prototype.toString.call(abc));
console.log(Object.prototype.toString.call(nn));

console.log(typeof NaN);