###### 书写可维护的代码

* 少用全局变量
* 隐式造成全局变量的错误写法
	* 直接使用未定义的变量   a = 123;
	* 链式赋值 var a = b = 123;
	* 这种全局变量是可以使用delete删除的
* 使用var声明变量
	* 使用var声明的变量不可以删除
	* 在全局作用域下使用var声明的变量可以使用window访问到，但不可以删除
	* 使用var声明的变量在整个当前作用域下都是已定义的，只不过在声明语句	前该变量的值是undefined
* 缓存对象访问结果，尤其是访问DOM对象以及在循环中检索时。
* for循环和for in
	* 使用for循环遍历数组，因为数组可能被扩展了其他属性
	* 使用for in 时，顺序是不能保证的
* 避免隐式类型转换，明确代码意图
* 避免使用eval
	* 不安全
	* 可能污染全局作用域
* 避免给setInterval，setTimeout传递字符串
* 无论在哪里使用Function，构造的函数只能访问到全局的对象
* 时刻注意parseInt的第二个参数, ES5已经解决了这个问题

###### 函数声明与函数表达式
* 函数声明前置（函数声明会在当前作用域下任何表达式被解析和求值之前先被解析）
* 命名函数表达式的名字只在该函数作用域内有效（低版本ie不一样）

###### 立即调用函数表达式

###### 五大原则
* 单一职责(Single Responsibility Principle)
	* information holder 
	* structurer
	* service provider
	* controller
	* coordinator
	* interfacer
* 开闭原则(Open/Closed Principle)
	* Software entities should be open for extension but closed for modification. 

##### JSON字符串与对象字面量
* 合法的JSON，键必须使用双引号，值为字符串时也必须使用双引号而不是单引号
* 是JSON字符串还是对象字面量取决于上下文

##### 闭包

##### this

##### 原型链

##### 作用域链

##### 执行上下文

##### 变量对象
