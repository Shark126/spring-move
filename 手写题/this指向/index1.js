window.number = 2;

var obj = {
    number: 3,
    db1: (function test1() {
       console.log('ddd', this);
       this.number *= 4;
       return function test() {
         console.log('return', this);
         this.number *= 5;
       }
     })()
}

var db1 = obj.db1; // ddd obj{ } 12
db1(); // return widnow 10

obj.db1(); // ddd 12 
console.log(obj.number); // 3
console.log(window.number); // 2

