# JavaScript 内存分析

JavaScript 会进行自动垃圾回收，销毁不再使用的变量，回收内存，并不需要我们像低级语言一样手动管理内存。


全局作用域下声明的变量不会被回收。因为在全局申明的变量默认属于全局对象的一个属性，存在引用关系。所以尽量不要直接在全局作用域下编写代码。


闭包不被引用时，闭包及闭包内的所有变量都会被回收。


## 避免内存泄漏

* 不再使用的事件订阅要取消订阅
* 生产环境应该清除 console.log 这种不必要的代码，因为它会保持对象，阻止回收


## 相关链接

* [JS内存泄漏排查方法](http://www.tuicool.com/articles/FVj2i2I)
* https://www.smashingmagazine.com/2012/06/javascript-profiling-chrome-developer-tools/
