let id = Symbol('xxx')
let id2 = Symbol('xxx')

let obj = {
    [id] : '1111'
}

let arr = Object.getOwnPropertySymbols(obj)
console.log(arr);
console.log(arr[0]);