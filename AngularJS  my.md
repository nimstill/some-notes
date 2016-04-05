AngularJS 指令是扩展的 HTML 属性，带有前缀 ng-。
ng-app 指令初始化一个 AngularJS 应用程序。
ng-init 指令初始化应用程序数据。
ng-model 指令把元素值（比如输入域的值）绑定到应用程序。

ng-model 指令可以为应用数据提供状态值(invalid, dirty, touched, error):

Scope(作用域) 是应用在 HTML (视图) 和 JavaScript (控制器)之间的纽带。
Scope 是一个对象，有可用的方法和属性。
Scope 可应用在视图和控制器上。

当在控制器中添加 $scope 对象时，视图 (HTML) 可以获取了这些属性。
视图中，你不需要添加 $scope 前缀, 只需要添加属性名即可，如： {{carname}}。
AngularJS 应用组成如下：
View(视图), 即 HTML。
Model(模型), 当前视图中可用的数据。
Controller(控制器), 即 JavaScript 函数，可以添加或修改属性。
scope 

所有的应用都有一个 $rootScope，它可以作用在 ng-app 指令包含的所有 HTML 元素中。
$rootScope 可作用于整个应用中。是各个 controller 中 scope 的桥梁。用 rootscope 定义的值，可以在各个 controller 中使用。

 AngularJS 控制器 控制 AngularJS 应用程序的数据。
 AngularJS 控制器是常规的 JavaScript 对象。

AngularJS 应用程序由 ng-app 定义。应用程序在 <div> 内运行。
ng-controller="myCtrl" 属性是一个 AngularJS 指令。用于定义一个控制器。
myCtrl 函数是一个 JavaScript 函数。
AngularJS 使用$scope 对象来调用控制器。
在 AngularJS 中， $scope 是一个应用象(属于应用变量和函数)。
控制器的 $scope （相当于作用域、控制范围）用来保存AngularJS Model(模型)的对象。
控制器在作用域中创建了两个属性 (firstName 和 lastName)。
ng-model 指令绑定输入域到控制器的属性（firstName 和 lastName）。


有个 $location 服务，它可以返回当前页面的 URL 地址
$http 是 AngularJS 应用中最常用的服务。服务向服务器发送请求，应用响应服务器传送过来的数据。
AngularJS 会一直监控应用，处理事件变化， AngularJS 使用 $location 服务比使用 window.location 对象更好。

AngularJS $timeout 服务对应了 JS window.setTimeout 函数。

ng-repeat 指令是通过数组来循环 HTML 代码来创建下拉列表，但 ng-options 指令更适合创建下拉列表，它有以下优势：
使用 ng-options 的选项的一个对象， ng-repeat 是一个字符串。

跨域 HTTP 请求
如果你需要从不同的服务器（不同域名）上获取数据就需要使用跨域 HTTP 请求。
跨域请求在网页上非常常见。很多网页从不同服务器上载入 CSS, 图片，Js脚本等。
在现代浏览器中，为了数据的安全，所有请求被严格限制在同一域名下，如果需要调用不同站点的数据，需要通过跨域来解决。
以下的 PHP 代码运行使用的网站进行跨域访问。
header("Access-Control-Allow-Origin: *");

ng-disabled 指令直接绑定应用程序数据到 HTML 的 disabled 属性。
ng-disabled 指令绑定应用程序数据 "mySwitch" 到 HTML 的 disabled 属性。
ng-model 指令绑定 "mySwitch" 到 HTML input checkbox 元素的内容（value）

模块定义了一个应用程序。
模块是应用程序中不同部分的容器。
模块是应用控制器的容器。
控制器通常属于一个模块。

在模块定义中 [] 参数用于定义模块的依赖关系。
中括号[]表示该模块没有依赖，如果有依赖的话会在中括号写上依赖的模块名字。

JavaScript 中应避免使用全局函数。因为他们很容易被其他脚本文件覆盖。
AngularJS 模块让所有函数的作用域在该模块下，避免了该问题。

novalidate 属性是在 HTML5 中新增的。禁用了使用浏览器的默认验证

$dirty  表单有填写记录
$valid  字段内容合法的
$invalid    字段内容是非法的
$pristine   表单没有填写记录

single page web application，SPA

ng-app 指令位于应用的根元素下。
对于单页Web应用（single page web application，SPA），应用的根通常为 <html> 元素。
一个或多个 ng-controller 指令定义了应用的控制器。每个控制器有他自己的作用域：: 定义的 HTML 元素。
AngularJS 在 HTML DOMContentLoaded 事件中自动开始。如果找到 ng-app 指令 ， AngularJS 载入指令中的模块，并将 ng-app 作为应用的根进行编译。
应用的根可以是整个页面，或者页面的一小部分，如果是一小部分会更快编译和执行。


