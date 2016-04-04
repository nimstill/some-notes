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


