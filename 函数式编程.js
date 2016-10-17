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


more  ES6


 W3C Web Components 

https://github.com/w3c/webcomponents

Web Components 包括了四个部分：

Custom Elements
HTML Imports
HTML Templates
Shadow DOM


constructor in class 作用相当于原本的 createdCallback
connectedCallback 作用相当于 attachedCallback
disconnectedCallback 作用相当于 detachedCallback
adoptedCallback 使用 document.adoptNode(node) 时触发
attributeChangedCallback 和原本保持一致

<template id="template">
  ...
</template>
Shadow DOM 好像提出好久了，最本质的需求是需要一个隔离组件代码作用域的东西，例如我组件代码的 CSS 不能影响其他组件之类的，
而 iframe 又太重并且可能有各种奇怪问题。

<template id=''>
<style>
::content li {
    display: inline-block;
    padding: 20px 10px;
}
</style>
<content select="ul"></content>
</template>
<script>
(function() {
    const element = Object.create(HTMLInuputElement.protype)
    constntekplate = document.currentScript.ownerDocument.querySelector('template')

    element.createdCallback = function() {
        const shadowRoot = this.createShadowRoot()
        const clone = document.importNode(template.content, true)
        shadowRoot.appendChild(clone)

        this.addEventListener('click', function(event) {
            console.log(event.target.textContent)
        })
    }

    document.registeerElement('test-header', {prototype: element})
})()
</script>



