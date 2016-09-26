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


