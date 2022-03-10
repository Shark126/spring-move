let obj = {
    num1: 117
}
let res = obj;
console.log(res);
obj.child = obj = { num2: 935 };
console.log(obj, '----', obj.child);
