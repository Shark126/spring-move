## call/apply与bind的区别
# 执行：

- call/apply改变了函数的this上下文后马上执行该函数
- bind则是返回改变了上下文后的函数,不执行该函数

# 返回值:

- call/apply 返回fun的执行结果
- bind返回fun的拷贝，并指定了fun的this指向，保存了fun的参数。

# 总结
all/apply是改变了函数的上下文指向后立刻执行，然后返回执行结果。bind是 改变了函数的上下文后将 该函数拷贝并保存下来返回，不立即执行