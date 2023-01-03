inner = 'window'
function say(){
    console.log(inner);
    console.log(this.inner);
}

var obj = (function(){
    var inner = '1-1'
    return {
        inner: '1-2',
        say: function(){
            console.log(inner);
            console.log(this.inner);
        }
    }
})()

say() // window  window
obj.say() // '1-1'  '1-2'
obj.say = say 
obj.say() // window '1-2'