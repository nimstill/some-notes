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


    ###vuex

组件不允许直接修改 store 实例的状态

在使用vuex的过程中你有可能会对从vuex.getters获取的数据进行再次操作。这是不允许的。改变 store 中的状态的唯一途径就是显式地分发 状态变更事件

组件永远都不应该直接改变 Vuex store 的状态。因为我们想要让状态的每次改变都很明确且可追踪，Vuex 状态的所有改变都必须在 store 的 mutation handler (变更句柄)中管理。


    用户在组件中的输入操作触发 action 调用；
    Actions 通过分发 mutations 来修改 store 实例的状态；
    Store 实例的状态变化反过来又通过 getters 被组件获知。


vue compoents -> call= actions -> diapath= muttations->
mutate=state-> update= vue components

mutation本身是一个事件系统，通过定义事件来触发Store的状态变更。mutation里面定义的函数必须是同步函数，涉及到API调用的逻辑要放到Action进行，因为Action是可以定义异步函数的。

