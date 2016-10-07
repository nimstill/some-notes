函数式编程
函数柯里化（curry）的定义很简单：传递给函数一部分参数来调用它，让它返回一个函数去处理剩下的参数。

比如对于加法函数 var add = (x, y) =>　x + y ，我们可以这样进行柯里化：

//比较容易读懂的ES5写法
var add = function(x){
    return function(y){
        return x + y
    }
}

//es6
var add = x => (y => x + y);

//试试看
var add2 = add(2);
var add200 = add(200);

add2(2); // =>4
add200(50); // =>250

事实上柯里化是一种“预加载”函数的方法，通过传递较少的参数，得到一个已经记住了这些参数的新函数，
某种意义上讲，这是一种对参数的“缓存”，是一种非常高效的编写函数的方法：

import { curry } from 'lodash';

var match = curry((reg, str) => str.match(reg));
var filter = curry((f,arr) => arr.filter(f));

var haveSpace = match(/\+/g/);

haveSpace("ffff");

filter(haveSpace, ["abcdefg", "Hello World"]);


