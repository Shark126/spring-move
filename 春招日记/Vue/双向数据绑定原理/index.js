class Vue{
    constructor(obj_instance){
        this.$data = obj_instance.$data
        Observer(this.$data)
    }
}

//数据劫持 - 监听实例里的数据
function Observer(data_instance){
    //递归出口
    if(!data_instance || typeof data_instance !== 'object') return
    Object.keys(data_instance).forEach( key =>{
        let value = data_instance[key]
        Observer(value) //递归 - 子属性数据劫持
        Object.defineProperty(data_instance,key,{
            enumerable: true, //可枚举
            configurable: true, //
            get() {
                console.log(`访问了shux: ${key} => 值: ${value}`);
                return value
            },
            set() {
                console.log(`属性${key}的值${value}修改为 => ${newValue}`);
                value = newValue
                Observer(newValue)
            }
        })
    })
}

// 总结 其实就是数据劫持操作
// vue实例在初始化的时候，有一个observer函数去监听data数据，这个函数的内部
// 会接收到data数据，并对其进行递归遍历，获取到它的所有key值，并使用defineProperty
// 对其进行数据劫持，通过get()和set()函数对数据的获取与修改进行操作，这样数据发生变化后就能
// 同步到

// 后面就是通过模版解析函数compile 将数据替换到Dom里面 渲染在页面上