├─.babelrc      // babel配置文件
├─.gitignore    
├─index.html        // 主页
├─package.json      // 项目配置文件
├─README.md  
├─webpack.config.js // webpack配置文件
├─dist          // 发布目录
│   ├─.gitkeep       
├─src           // 开发目录 
│   ├─App.vue       // App.vue组件
│   ├─main.js       // 预编译入口




porps：基于属性传递，vue提供了单次绑定、单向绑定和双向绑定。

通过引用：子组件可以用this.$parent访问它的父组件。根实例的后代可以用this.$root访问它。父组件有一个数组this.$children，包含它所有的子元素。

它需要dispatch一个事件给App ->需要监听A组件dispatch的事件，同时需要broadcast一个事件给B组件。
-> 它需要on监听App组件分发的事件。

