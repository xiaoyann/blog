# ES6 - Class
英文抄自[http://www.2ality.com/2015/02/es6-classes-final.html](http://www.2ality.com/2015/02/es6-classes-final.html)

##### Syntax.
```javascript
/* 
class 类名 {
    成员方法
}
*/
class Person {
    // 构造方法
    constructor(name) {
        this.name = name;
    } 
    // 静态方法
    static staticMethod() {
        console.log('static method');
    }
    // 原型方法
    getName() {
        return this.name;
    }
    sayName() {
        var name = this.getName();
        console.log('My name is ' + name);
    }
}

var ziyan = new Person('ziyan');
ziyan.sayName(); // My name is ziyan
```

##### Class expressions.
```javascript
// 或者   var Person2 = Person;
var Person2 = class Person {
    constructor(name) {
        this.name = name;
    } 
    getName() {
        return this.name;
    }
    sayName() {
        var name = this.getName();
        console.log('My name is ' + name);
    }
}

var ziyan = new Person2('ziyan');
ziyan.sayName(); // My name is ziyan
```

##### In fact, the result of a class definition is a function. But we can only invoke a class via new, not via a function call.
```javascript
class Person {
    constructor(name) {
        this.name = name;
    }
}

console.log(typeof Person); // function

var p = Person(); // will throw an error.
```

##### Class declarations are not hoisted.
```javascript
new Person(); // will throw a ReferenceError

class Person {
    static hehe() {
        console.log('hehe.');
    }
}
```

##### define a static method with static.
```javascript
class Person {
    static hehe() {
        console.log('hehe.');
    }
}

Person.hehe(); // hehe
```

##### getters and setters.
```javascript
class Person {
    constructor(name) {
        this.name = name;
    }
    set gender(value) {
        console.log(value);
    }
    // 这里不能有参数，否则会报错
    get gender() {
        console.log('get gender');
        return 123;
    }
}

var ziyan = new Person('ziyan');
ziyan.gender = 'male'; // get gender
var gender = ziyan.gender; // get gender
console.log(gender); // 123
```

##### computed method name.
```javascript
var str = 'Name';

class Person {
	constructor(name) {
		this.name = name;
	}
	['say' + str]() {
		console.log(this.name);
	}
}

var p = new Person('xiaofeng');

p.sayName(); // xiaofeng
```

##### use extends clause to create a subclass.
```javascript
class Person {
	constructor(name) {
		this.name = name;
	}
	static hehe() {
	    console.log('hehe');
	}
	sayName() {
		console.log(this.name);
	}
}

class MalePerson extends Person {
	constructor(name, gender) {
		super(name);
		this.gender = gender;
	}
	sayGender() {
		console.log(this.gender);
	}
}

var xiaofeng = new MalePerson('xiaofeng', 'male');

xiaofeng.sayName(); // xiaofeng
xiaofeng.sayGender(); // male
MalePerson.hehe(); // hehe
```

##### In a derived class, we must call super() and only after call super() we can use this. 

##### 未完待续...