function a(xx){
    this.x = xx 
    return this
}
var y = a(6)
console.log(y);
var x = a(5)
console.log(x);
// console.log(z.x);
// console.log(y.x);