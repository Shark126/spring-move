// 剑指offer 05

// offer消失术大法
var replaceSpace = function(s) {
    return s.replaceAll(" ","%20");
};

// 遍历大法
var replaceSpace = function(s) {
    let arr = s.split('')
    let newArr = arr.map((item) =>{
        if(item == ' '){
            return item = '%20'
        }else{
            return item
        }
    })

    return newArr.join('')
};