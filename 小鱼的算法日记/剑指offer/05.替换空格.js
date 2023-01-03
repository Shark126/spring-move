/** 方法1 */
var replaceSpace = function(s) {
    return s.split(' ').join('%20')
  };
  
  /** 方法2 */
  var replaceSpace = function(s) {
    var length = s.length;
    var arr  = s.split('');
    for(var i = 0; i < length; i++){
      if(arr[i] == ' '){
        arr[i] = '%20'
      }
    }
    return arr.join('')
  };
  