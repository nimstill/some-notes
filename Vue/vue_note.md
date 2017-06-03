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

// 滚动到页面顶部
router.beforeEach(function() {
  window.scrollTo(0, 0)
})

//全路径匹配，防止出现404
router.redirect({
  '*': '/'
})
//启动APP
router.start(App, '#root')

ctions 是组件内用来分发 mutations 的函数。第一个参数固定为store。

export const showDetail = makeAction('SHOW_DETAIL')

function makeAction(type) {
    return ({
    dispatch
    }, ...args) => dispatch(type, ...args)
}

vuex: {
    getters: {
    orders: ({orderList}) => orderList.orders
},
actions: {
    showDetail
},
computed: {
}
}
activeClass:'active'

在**webpack**的配置文件我们需要用到四个npm的模块分别是：path，webpack，extract-text-webpack-plugin,vue-loader记得先下载包在用require命令引入进来

//node的路径模块
var path=require('path');
//我们是webpack当然要引入这个
var webpack = require('webpack');
//这个是构建页面资源的插件
var ExtractTextPlugin = require('extract-text-webpack-plugin');
//因为我们是vue.js的应用，把各个组件当做一个页面.vue后缀，所以引入这个可以编译這些文件
var vue = require("vue-loader");


//__dirname是node里面的一个变量，指向的是当前文件夹目录
var ROOT_PATH = path.resolve(__dirname);
//这个我们的文件入口，等下我们就会从main.js这个文件作为入口
var APP_PATH = path.resolve(ROOT_PATH, 'src/main.js');
//这个是文件打包出来的输出路径
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

var plugins = [
  //提公用js到common.js文件中
  new webpack.optimize.CommonsChunkPlugin('common.js'),
  //将样式统一发布到style.css中
  new ExtractTextPlugin("style.css"),
 // 使用 ProvidePlugin 加载使用率高的依赖库
  new webpack.ProvidePlugin({
    $: 'webpack-zepto'
  })
];

module.exports = {
     //文件的入口，还可以写成多数组的形式，具体自己扩展
     entry:[APP_PATH],
     //输出
     output:{
         //输出路径
         path: BUILD_PATH，
         //打包的js命名
         filename：build.js'
         // 指向异步加载的路径
         publicPath : __dirname + '/build/',
         // 非主文件的命名规则，加缓存用到md5
         chunkFilename: '[id].build.js?[chunkhash]'
     },
     module: {
         loaders: [
              {
                test: /\.vue$/,
                loader: 'vue',
              },
              {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style-loader", 'css-loader')
              },
              {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
              },
              {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=40000'
              }
         ]
    },
  //这个特别说明下，vue提倡把一个组件当做一个页面，所以可能在一个页面写html，style，javascript，也可以引入和写scss文件
  vue: {
    css: ExtractTextPlugin.extract("css"),
    sass: ExtractTextPlugin.extract("css!sass-loader")
  },
  plugins: plugins
}

在vue里面声明并注册个空组件

Vue.use(VueRouter);
Vue.use(VueResource);
var app = Vue.extend({});



    component local state：该状态表示仅仅在组件内部使用的状态，类似通过配置选项传入 Vue 组件内部

    application level state：应用层级状态，表示同时被多个组件共享的状态层级。


Vuex 规定，属于应用层级的状态只能通过 Mutation 中的方法来修改，而派发 Mutation 中的事件只能通过 action。

从左到又，从组件出发，组件中调用 action，在 action 这一层级我们可以和后台数据交互，比如获取初始化的数据源，或者中间数据的过滤等。然后在 action 中去派发 Mutation。Mutation 去触发状态的改变，状态的改变，将触发视图的更新。


export const filteredNotes = (state) => {
    if (state.show === 'all') {
    return state.notes || {};
} else if (state.show === 'favorite') 
{
return state.notes.filter(note=> note.favorite) || {};
}
};

export const show = (state) => {
    return state.show;
};

export const activeNote = (state) => {
    return state.activeNote;
};



function install (_Vue) {
    if (Vue) {
    console.error('...')
    return
}
Vue = _vue
applyMixin(Vue)
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}


#webpack
执行npm run dev命令后并不会在dist目录下生成build.js文件，开发环境下build.js是在运行内存中的。









Vue组件接收交互行为，调用dispatch方法触发action相关处理，若页面状态需要改变，则调用commit方法提交mutation修改state，通过getters获取到state新值，重新渲染Vue Components，界面随之更新。

