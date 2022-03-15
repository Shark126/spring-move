var a = 10;

var foo = {

  a: 20,

  b: function(){

  var a = 30;

  return this.a;

},

  c: () => {

  var a = 40;

  return this.a;

  },

}

var d = {

  a: 50,

};

console.log(a); //10

console.log(foo.b()); //20

console.log(foo.c()); // undefined

console.log(foo.b.bind(d)()); //50

console.log(foo.c.bind(d)()); // undefined