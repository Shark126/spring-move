// 5.实现一个sum 函数，使其同时满足以下两个调用需求




function sum(){
    let arr = [].slice.call(arguments);
    let fn = function(){
    	let arr2 = [].slice.call(arguments);
        return sum.apply(null,arr.concat(arr2));
    }
    
    fn.toString = function(){
    	return arr.reduce((v,n) => v+n);
    }
    
    return fn;
}


sum(2,3)  // 5

sum(2)(3) // 5