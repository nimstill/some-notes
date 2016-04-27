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

  