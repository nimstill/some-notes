react.js使用jsx语法，script标签的type值必须为“text/jsx“！ 在jsx语法中遇到HTML标签（以<开头），就用HTML规则解析；遇到代码块（以{开头），就用js规则解析。 JSX 允许直接在模板插入 JavaScript 变量。如果这个变量是一个数组，则会展开这个数组的所有成员。

  ReactDOM.render是React的基本方法，用于将模板转为HTML，并插入指定的DOM节点：(第一个参数为模板，第二个参数为dom对象)

   React.createClass是React创建组件的方法，组件标签必须首字母大写， 组件中包含：     1. this.props对象，用来获取属性值, {…this.props}用来复制组件的所有属性

   wobuyuanrangni yigeren 但你的身边从来不曾缺人···

   farewell  我的大学

这里的...other会包含checked属性外的其他（name, onClick）属性

 2.this.props.children用来获取标签内的所有子节点      3.propTypes对象用来验证组件实例的属性

     var MyTitle = React.createClass({
        propTypes: {
            title.React.propType.string.isRequired,
            },
            render: function() {
                return <h3>{this.props.title}</h3>;
            }
     })

4.getDefaultProps方法用来设置组件属性的默认值

5.ref用来获取真实的DOM：  
6.this.state，用来改变组件的状态，以便和用户交流，getInitialState方法用于定义初始状态，返回一个对象！这个对象可以通过this.state属性读取！

由于 this.props 和 this.state 都用于描述组件的特性，可能会产生混淆。一个简单的区分方法是，this.props 表示那些一旦定义，就不再改变的特性，而 this.state 是会随着用户互动而产生变化的特性。 ）表单的值需要通过this.state+onchange获取操作

组件的生命周期 组件的生命周期分为三个状态：      Mounting: 已插入真实DOM      Updating: 正在被重新渲染      Unmounting: 已移除真实DOM   React为每个状态都提供了两种处理函数，will函数在进入状态之前调用，did函数在进入状态之后调用，三种状态共有五种处理函数

1.
componentWillMount()
2.
componenrDidMount()
3.
componentWillUpdate(object nextProps, object nextState)
4.
componentDidUpdate(object nextProps, object nextState)
5.
componentWillUnmount()

React还提供两种特殊状态处理函数：      componentWillReceiveProps(object nextProps): 已加载组件收到新的参数时调用      shouldComponentUpdate(object nextProps, object nextState): 组件判断是否重新渲染时调用   组件style属性的设置方式需要写成style={{display: this.state.display}}  


flexDirection: 'row'来让我们的主容器的成员从左到右横向布局，而非默认的从上到下纵向布局。

组件加载完毕之后，就可以向服务器请求数据。componentDidMount是React组件的一个生命周期方法，它会在组件刚加载完成的时候调用一次，以后不会再被调用。

**使用adb出现cannot parse version string:kg01**

*solution：adb kill-server*


Promise对象有以下两个特点。

（1）对象的状态不受外界影响。Promise对象代表一个异步操作，有三种状态：Pending（进行中）、Resolved（已完成，又称Fulfilled）和Rejected（已失败）。只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。这也是Promise这个名字的由来，它的英语意思就是“承诺”，表示其他手段无法改变。

2）一旦状态改变，就不会再变，任何时候都可以得到这个结果。Promise对象的状态改变，只有两种可能：从Pending变为Resolved和从Pending变为Rejected。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果。就算改变已经发生了，你再对Promise对象添加回调函数，也会立即得到这个结果。这与事件（Event）完全不同，事件的特点是，如果你错过了它，再去监听，是得不到结果的。

