var name = 'window';

var person1 = {
  name: 'person1',
  show1: function () {
    console.log(this.name);
  },
  show2: () => console.log(this.name),
  show3: function () {

    return function () {
      console.log(this);
    };
  },
  show4: function () {

    return () => console.log(this.name);
  }
};
var person2 = { name: 'person2' };


person1.show1(); //person1
person1.show1.call(person2); //person2


person1.show2(); //window
person1.show2.call(person2); //window

// var fn = person1.show3() --> window
// fn()
person1.show3()(); // window { }

person1.show3().call(person2); // {name: 'person2'}

// var fn = person1.show3.call(person2)
// 
person1.show3.call(person2)(); //  window { }

// var  fn = person1.show4()  ---> person1.this
// fn() -->person1
person1.show4()(); // person1

person1.show4().call(person2); //  person1

person1.show4.call(person2)();  // person2