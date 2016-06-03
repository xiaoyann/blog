// 在全局作用域下申明一个大数据变量，这个变量不会被销毁
// var globalBigData = {val: new Array(10000*1000).join('x')};

/*
void function () {
    // 在局部作用域申明的变量，会在函数执行完后，自动销毁
    var globalBigData = {val: new Array(10000*1000).join('x')};
}();


var arr = [];

window.onload = function handleOnload() {
    var btn = document.getElementById('btn');
    var box = document.getElementById('box');
    btn.addEventListener('click', function handleClick() {
        var closureModule = closureTest();
        box.innerHTML = closureModule.getData();
        closureModule.increment();
        box.innerHTML = closureModule.getData();
    }, false);
};

// function closureTest() {
//     var innerData = {a: Array(1000*100).join('xx').split('')};
//     return function getData() {
//         return innerData;    
//     };
// }


function closureTest() {
    var innerIndex = new Array(100000 * 100).join('xxxx');
    return {
        getData: function _getData() {
            return innerIndex;
        },
        increment: function _increment() {
            innerIndex += 'x';
        }
    };
}
*/


/*
;(function() {
    function bind(func, context) {
        context = null;
        return function _bindInner() {
            func.apply(context);
        }
    }

    var ClassA = function(name) {
        this.name = name;
        this.func = 123;
    };

    var a = new ClassA('a');
    var b = new ClassA('b');

    b.func = bind(function _console() {
        console.log(this.name);
    }, a);

    b.func();

    a = null;

    window.__b__ = b;
    // b = null;
})();
*/

// window.onload = function() {
//     var bigString = new Array(10000000).join('xxx');
//     var btn = document.getElementById('btn');
//     // document.getElementById('btn').expandorObj = btn;
//     btn.bigString = new Array(10000000).join('xxx');
//     // btn.onclick = function handleClick() {
//     //     console.log(bigString);
//     // };
//     // btn.addEventListener('click', function handleClick2() {
//     //     console.log(bigString);
//     // }, false);
//     document.getElementById('btn').remove();
// };



var Leaker = function(){};

Leaker.prototype = {
    init:function(){
        this._interval = null;
        this.index = 0;
        this.xxxx = new Array(9999999).join('xxxxxx');
        this.start();
    },

    start: function(){
        var self = this;
        this._interval = setInterval(function(){
            self.onInterval();
        }, 1000);
    },

    destroy: function(){
        if(this._interval !== null){
            clearInterval(this._interval);          
        }
    },

    onInterval: function(){
        console.log("Interval");
    }
};


window.onload = function() {
    var leak = new Leaker();
    // leak.init();

    document.getElementById('btn1').onclick = function() {

    };
    document.getElementById('btn2').onclick = function() {
        // leak.destroy();
        // leak = null;
    };
};





