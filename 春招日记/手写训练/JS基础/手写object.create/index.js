function create(obj){
    function Fn(){
        Fn.prototype = obj
    }
    return new Fn()
}

function myCreate(){
    function Fn(obj){
        Fn.prototype = obj
    }
    return new Fn()
}