// simple test



// var d = new Promise(function(resolve, reject) {
//     // executed immediately
//     console.log('created');

//     setTimeout(function() {
//         resolve('ok');
//     }, 1000);
// });


// d.then(
//     function(result) {
//         console.log('ok:', result);
//     },
//     function(result) {
//         console.lgo('err:', result);
//     }
// );


// console.log(Promise.length);


function doSomething() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('doSomething done');
            resolve(1);
        }, 1000);
    });
}

function doSomethingElse() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('doSomethingElse done');
            resolve(2);
        }, 1000);
    });
}

// // 1.
// doSomething().then(function(res) {
//     return doSomethingElse();
// }).then(function(res) {
//     console.log('then ', res);
// });

// // 2.
// doSomething().then(function(res) {
//     doSomethingElse();
// }).then(function(res) {
//     console.log('then ', res);
// });

// // 3.
// doSomething().then(doSomethingElse())
//     .then(function(res) {
//         console.log('then', res);
//     });

// 4.
// doSomething().then(doSomethingElse)
//     .then(function(res) {
//         console.log('then', res);
//     });



function turnGreen(){
    return new Promise(function(resolve, reject) {
        traffic.className = 'green';
        resolve();
    })
}

function turnRed(){
    return new Promise(function(resolve, reject) {
        traffic.className = 'red';
        resolve();
    })
}

function turnYellow(){
    return new Promise(function(resolve, reject) {
        traffic.className = 'yellow';
        resolve();
    })
}

function wait5000(){
    return new Promise(function(resolve, reject) {
        setTimeout(resolve,5000);
    })
}

function wait2000(){
    return new Promise(function(resolve, reject) {
        setTimeout(resolve,2000);
    })
}

// // 执行！
// void function (){
//     turnGreen()
//     .then(wait5000)
//     .then(turnYellow)
//     .then(wait2000)
//     .then(turnRed)
//     .then(wait5000)
//     .then(arguments.callee)
// }();



// var p = new Promise(function(resolve, reject) {
//     resolve(1);
// });

// p.then(function(result) {
//     console.log(result);
// }).then(function(res) {
//     console.log(res);
// });


function setClassName(className) {
    traffic.className = className;
}


function init() {
    // init green
    setClassName('green');
    
    // next yellow
    setTimeout(function() {
        
        setClassName('yellow');  
        
        // next red
        setTimeout(function() {
            setClassName('red');
            // again
            setTimeout(init, 5000);
        }, 2000);

    }, 5000);
}

// init();

var options = [
    {name: 'green', expires: 1000},
    {name: 'yellow', expires: 1000},
    {name: 'red', expires: 1000}
];

(function test(index) {
    console.timeStamp("Adding result");
    if (index >= options.length) index = 0;
    var conf = options[index++];
    traffic.className = conf.name;
    setTimeout(function() {
        test(index);
    }, conf.expires);
})(0);


// function turn(color) {
//     traffic.className = color;
//     return new Promise(function(resolve) {
//         setTimeout(function() { 
//             resolve(this.next) 
//         }.bind(this), this.wait)
//     }.bind(this))
// }

// turn.and = turn.bind; // 仅为了可读性

// void function (){
//   Promise.resolve('green')
//     .then(turn.and({wait: 5000, next: 'yellow'}))
//     .then(turn.and({wait: 2000, next: 'red'}))
//     .then(turn.and({wait: 5000}))
//     .then(arguments.callee)
// }();

// .then(function() {
//     return turn({wait: 5000, next: 'yellow'});
// });


// function turn(color, duration) {
//   return new Promise(function(resolve, reject) {
//     traffic.className = color
//     setTimeout(resolve, duration)
//   })
// }

// //执行！
// void function run() {
//     turn('green', 1000)
//     .then(turn.bind(null, 'yellow', 400))
//     .then(turn.bind(null, 'red', 1000))
//     .then(run)
// }()



// var p = new Promise(
//     function(resolve, reject) {
//         resolve('success');
//     }
// ).then(function(res) {
//     console.log(res);
    
//     p.then(function(res) {
//         console.log('--', res);
//     });
    
//     console.log(1);

//     return 11;
// });






