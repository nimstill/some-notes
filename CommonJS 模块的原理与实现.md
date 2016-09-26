浏览器不兼容CommonJS的根本原因，在于缺少四个Node.js环境的变量

module  exports  require global

只要能够提供这四个变量，浏览器就能加载 CommonJS 模块

var module = {
    exports: {}
};

(function(module, exports) {
        exports.multiply = function(n) {
        return n* 1000;
    };
}(module, module.exports))

var f = module.exports.multiply;
f(5);

require()用来引入外部模块；exports对象用于导出当前模块的方法或变量，唯一的导出口；module对象就代表模块本身。 
package.json
bin
lib 
doc 
test


**webpack**

npm install webpack
sudo npm install webpack -g

module.exports = {
    // The standard entry point and output config
    //每个页面的js文件
    entry: {
        home: "js/home",
        detail: "js/detail"
    },
    output: {
        path: "assets",                   //打包输出目录
        publicPath: "/static/build/",     //webpack-dev-server访问的路径
        filename: "[name].js",            //输出文件名
        chunkFilename: "bundle-[id].js"   //输出chunk文件名
    }
};

文件束chunk

找不到js/home的模块，只要在配置里面加一句resolve：

告诉webpack模块的目录JavaScript

resolve: {
    modulesDirectories: ['.']
}


npm install webpack-dev-server --save-dev
sudo npm install webpack-dev-server -g

webpack-dev-sever --port=8080

moduleexports = {
    entry: ...,
    output: ...,
    resolve: ...,
    module: {
    loaders: [
    {
        test: /\.css$/,
        loader: "style-loader!css-loader"
    },
    ]
}
};


安装分离css插件Shell

npm install extract-text-webpack-plugin --save-dev


var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    module: {
        loaders: [
            // Extract css files
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
        ]
    },

    plugins: [
        new ExtractTextPlugin("[name].css")
    ]
}

用热加载方式启动Shell
webpack-dev-server --port=8383 --hot --inline

可以指定一个minChunk的参数，指定模块至少被require几次才能提取出来，默认是3

还可以定义两个commonChunk，例如在详情页、列表页和首页都有搜索的模块，而其它页面没有搜索的模块，也就是说除了所有页面都有的公共模块如登陆注册外，还有一个搜索的公共模块有三个页面要用到。如果都用一个common chunk，会把搜索的也放进来，但其它很多页面并不需要用到。这个时候需要加多一个common chunk：

plugins: [
    new CommonsChunkPlugin({
        name: "search-app.chunk",
        chunks: ["search-app-init", "home", "detail", "list"]
    }),
    new CommonsChunkPlugin({
        name: "common-app.chunk",
        chunks: ["home", "detail", "search-map", "search-app.chunk", "sell", "about", "blog"]
    })
]


引入压缩的插件JavaScript

var webpack = require("webpack");
plugins: [
    new webpack.optimize.UglifyJsPlugin()
]

版本号就是在输出带上hash的替换符，如下：

加上hash版本号JavaScript

module.exports = {
    output: {
        path: "assets",
        publicPath: "/static/build/",
        filename: "[name]-[chunkhash].js",
        chunkFilename: "bundle-[chunkhash].js"
    },
 
    plugins: [
        new ExtractTextPlugin("[name]-[contenthash].css")
    ],
}

var AssetsPlugin = require('assets-webpack-plugin');
output: {
    publicPath: "//cdn.mycde.com/static/build/"
},
pludins: [
    new Assetplugin({filename: './source-map.json', prettyPrint: true}),
]

>

http://yincheng.site/webpack?hmsr=toutiao.io&utm_medium=toutiao.io&utm_source=toutiao.io


