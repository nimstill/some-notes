var React = require("react-native");
var {
    Image,
    Text,
    PropTypes
} = REact;

---
import Eact, {
    Image,
    Text,
    PropTypes
} from 'react-native';

在ES5里，要导出一个类给别的模块用，一般通过module.exports来导出

//ES5
var MyComponent = React.createClass({
    ...
});
module.exports = MyComponent;

//ES6
export default class MyComponent extends React.Component{
    ...
}

//ES5
var MyComponent = require('./MyComponent.js');

//ES6
import MyComponent from './MyComponent.js';

定义组件

在ES5里，通常通过React.createClass来定义一个组件类，像这样：

//ES5
var Photo = React.createClass({
    render: function() {
        return (
            <Image source={this.props.source} />
        );
    },
});
在ES6里，我们通过定义一个继承自React.Component的class来定义一个组件类，像这样：

//ES6
class Photo extends React.Component {
    render() {
        return (
            <Image source={this.props.source} />
        );
    }
}


给组件定义方法

从上面的例子里可以看到，给组件定义方法不再用 名字: function()的写法，而是直接用名字()，在方法的最后也不能有逗号了。

//ES5 
var Photo = React.createClass({
    componentWillMount: function(){

    },
    render: function() {
        return (
            <Image source={this.props.source} />
        );
    },
});
//ES6
class Photo extends React.Component {
    componentWillMount() {

    }
    render() {
        return (
            <Image source={this.props.source} />
        );
    }
}

定义组件的属性类型和默认属性

在ES5里，属性类型和默认属性分别通过propTypes成员和getDefaultProps方法来实现

在ES6里，可以统一使用static成员来实现

//ES6
class Video extends React.Component {
    static defaultProps = {
        autoPlay: false,
        maxLoops: 10,
    };  // 注意这里有分号
    static propTypes = {
        autoPlay: React.PropTypes.bool.isRequired,
        maxLoops: React.PropTypes.number.isRequired,
        posterFrameSrc: React.PropTypes.string.isRequired,
        videoSrc: React.PropTypes.string.isRequired,
    };  // 注意这里有分号
    render() {
        return (
            <View />
        );
    } // 注意这里既没有分号也没有逗号
}

注意: 对React开发者而言，static成员在IE10及之前版本不能被继承，而在IE11和其它浏览器上可以，这有时候会带来一些问题。React Native开发者可以不用担心这个问题。


箭头函数实际上是在这里定义了一个临时的函数，箭头函数的箭头=>之前是一个空括号、单个的参数名、或用括号括起的多个参数名，而箭头之后可以是一个表达式（作为函数的返回值），或者是用花括号括起的函数体（需要自行通过return来返回值，否则返回的是undefined）。

#### ES6

function decimal(num, fix) {
    fix = fix === coid(0) ? : fix;
    return +num.toFixed(fix);
}

function decimal(num, fix = 2) {
    return +num.toFixed(fix);
}

Const

无变量提升
有块级作用域
禁止重复声明

ᶓ 这个常量属性，表示小数的极小值，主要用来判断浮点数计算是否精确，如果计算误差小于该阈值，则可以认为计算结果是正确的。

isInteger() 这个方法用来判断一个数是否为整数，返回布尔值。
isNaN() 用来判断入参是否为 NaN

