// let undefined = 1
// console.log(void 0);
// console.log(null);
// console.log(null+1);

// console.log(null === 0);

// console.log(typeof NaN);
// console.log(Object.is(NaN,NaN));

// console.log(+0 === -0);

// console.log(Object.is(+0,-0))

let Obj = function(name,age){
    this.name = name,
    this.age = age

    this.A = function(){
        console.log(this.name);
    }
}

let dd = new Obj('阿旺',456)

console.log(dd);
dd.A()
