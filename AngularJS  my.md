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
