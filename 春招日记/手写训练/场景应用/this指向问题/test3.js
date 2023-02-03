function foo() {
    var myName = '每日互动';
    let test1 = 1;
    const test2 = 2;
    var innerBar = {
      getName: function() {
        console.log(test1);
        return myName;
      },
      setName: function(newName) {
        myName = newName;
      },
    };
    return innerBar;
  }
  var bar = foo();//返回一个对象
  bar.setName('个推');//1
  bar.getName();//1
  console.log(bar.getName());//个推