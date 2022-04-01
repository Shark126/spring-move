var obj = function(){
    var inner = '1-1'
  
        inner: '1-2',
        function say(){
            console.log(inner);
            console.log(this.inner);
        }

}