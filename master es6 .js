function iteratorFactory(i) {
    var onclick = function(e) {
        console.log(i)
    }
    return onclick;
}

var clickBoxs = document.querySelectorAll('.clickBox')


for (var i = 0; i < clickBoxs.length; i++) {
    clickBoxs[i].onclick = iteratorFactory(i)
}

class Animal {
    constructor() {
        this.type = 'animal'
    }
    says(say) {
        setTimeout( () => {
            console.log(this.type + 'says' + say)
        }, 1000)
    }
}

var animal = new Animal()
animal.says('hi')

/*
当我们使用箭头函数时，函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。 并不是因为箭头函数内部有绑定this的机制，实际原因是箭头函数根本没有自己的this，
它的this是继承外面的，因此内部的this就是外层代码块的this。
*/

解构

rest  

