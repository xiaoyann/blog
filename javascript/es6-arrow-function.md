# ES6 - 箭头函数

##### 语法结构
```javascript
// 【参数体 => 函数体】

var arrows = () => console.log('arrows function.');

```

##### 没有参数时需要写上括号，只有一个参数时可以不写括号，有多个参数时需要写上括号。
```javascript
// 没有参数
var arrows = () => console.log('nothing.');
arrows(); // nothing.

// 一个参数
var arrows = a => console.log(a);
arrows(1); // 1

// 多个参数
var arrows = (a, b) => console.log(a + b);
arrows(1, 2); // 3
```

##### 函数体可以是单一的表达式，该表达式的结果将作为返回值被返回。如果该表达式是一个对象字面量则需要使用括号括起来，避免与区块函数体混淆。
```javascript
var arrows = () => 'hehe';
console.log(arrows()); // hehe;

// 返回一个对象字面量时
var arrows = () => ({name: '子燕'});
```

* 要写多条表达式时，使用大括号定义一个区块
```javascript
var arrows = (a, b) => {
    var r = a + b;
    return r;
};
console.log(arrows(1, 2)); // 3
```

##### *this*在定义时就已被绑定，并且是不可变的，使用call、apply也不能改变*this*的值

```javascript
var name = 'xiaofeng';
var arrows = () => console.log(this.name);

var xiaoming = {
	name: 'xiaoming',
	sayName: arrows
};

xiaoming.sayName();    // xiaofeng
arrows.call(xiaoming); // xiaofeng
arrows.apply(xiaoming);// xiaofeng 
```

##### 不能当做构造函数使用(不能使用*new*)
```javascript
var Arrows = (name) => this.name = name;
new Arrows('xiaofeng');    
// 在Firefox下报：TypeError: arrows is not a constructor
```

