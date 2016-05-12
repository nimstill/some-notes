if (conected) {
    login();
}

conected && login();

///////////////////////////

function User(name, age) {
    this.name = name || "Oliver";
    this.age = age || 27;

}
var user1 = new User();
console.log(user1.name);
console.log(user1.age);

var user2 = new User("Barry Allen", 25);
console.log(user2.name);
console.log(user2.age);



1.请描述一下 cookies，sessionStorage 和 localStorage 的区别？
cookie是网站为了标示用户身份而储存在用户本地终端（Client Side）上的数据（通常经过加密）。
cookie数据始终在同源的http请求中携带（即使不需要），记会在浏览器和服务器间来回传递。
sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存。
存储大小：
cookie数据大小不能超过4k。
sessionStorage和localStorage 虽然也有存储大小的限制，但比cookie大得多，可以达到5M或更大。
有期时间：
localStorage    存储持久数据，浏览器关闭后数据不丢失除非主动删除数据；
sessionStorage  数据在当前浏览器窗口关闭后自动删除。
cookie          设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭

2.iframe有那些缺点？
iframe会阻塞主页面的Onload事件；
搜索引擎的检索程序无法解读这种页面，不利于SEO;
iframe和主页面共享连接池，而浏览器对相同域的连接有限制，所以会影响页面的并行加载。
使用iframe之前需要考虑这两个缺点。如果需要使用iframe，最好是通过javascript动态给iframe添加src属性值，这样可以绕开以上两个问题。

3.如何实现浏览器内多个标签页之间的通信?
WebSocket、SharedWorker
也可以调用localstorge、cookies等本地存储方式。
localstorge另一个浏览上下文里被添加、修改或删除时，它都会触发一个事件，我们通过监听事件，控制它的值来进行页面信息通信。
注意quirks：Safari 在无痕模式下设置localstorge值时会抛出 QuotaExceededError 的异常。

5.介绍一下标准的CSS的盒子模型？低版本IE的盒子模型有什么不同的？
（1）有两种， IE 盒子模型、W3C 盒子模型。
（2）盒模型： 内容(content)、填充(padding)、边界(margin)、 边框(border)。
（3）区  别： IE的content部分把 border 和 padding计算了进去。

CSS Sprites其实就是把网页中一些背景图片整合到一张图片文件中，再利用CSS的“background-image”，“background-position”的组合进行背景定位，这样可以减少很多图片请求的开销，因为请求耗时比较长；请求虽然可以并发，但是如果请求太多会给服务器增加很大的压力。
8.display:none和visibility:hidden的区别？
display:none  隐藏对应的元素，在文档布局中不再给它分配空间，它各边的元素会合拢，就当他从来不存在。
visibility:hidden  隐藏对应的元素，但是在文档布局中仍保留原来的空间。

9.position的absolute与fixed区别
absolute浮动定位是相对于父级中设置position为relative或者absolute最近的父级元素
fixed浮动定位是相对于浏览器视窗的
10.IE 8以下版本的浏览器中的盒模型有什么不同？
IE8以下浏览器的盒模型中定义的元素的宽高不包括内边距和边框

absolute浮动定位是相对于父级中设置position为relative或者absolute最近的父级元素

Array.prototype.unique1 = function() {
    var n = [];
    for (var i = 0; i < this.length; i++){
        if (n.indexOf(this[i]) == -1) n.push(this[i]);
    }
    return n;
}


Array.prototype.unique2 = function(){
    var n = {}, r = [];
    for(var i = 0; i< this.length;i++){
        if(!n[this[i]]){
            n[this[i]] = true;
            r.push(this[i]);
        }
     
    }
    return r;
}


Array.prototype.unique3 = function() {
    var n = [this[0]];
    for(var i =1; i< this.length; i++){
        //如果当前数组的第I项在当前数组中第一次出现的位置不是i
        //那么表示第i项是重复的， 忽略掉，否则存入结果数组
        if ( this.indexOf(this[i]) ==i ) n.push(this[i]);
    }
    return n;
}


//创建cookie

function setCookie() {
    var cookieText = encodeURIComponent(name) + '=' encodeURIComponent(value);
    if (expires instanceif Date) {
        cookieText += '; expires=' + expires;
    }
    if (path){
        cookieText += '; domain=' + domain;
    }
    if (secure) {
        cookieText += '; secure';
    }
    document.cookie = cookieText;
}

//获取cookie

function getCookie(name) {
    var cookieName = encodeURIComponent(name) + '=';
    var cookieStart = document.cookie.indexOf(cookieName);
    var cookieValue = null;
    if (cookieStart > -1){
        var cookieEnd ==-1{
            cookieEnd = document.cookie.length;
        }
        cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
    }
    return cookieValue;
}

//删除cookie
function unsetCookie(name) {
    document.cookie = name + "= ; expires=" + new Date(0);


3.ajax 有那些优缺点?如何解决跨域问题?
（Q1）
优点：
（1）通过异步模式，提升了用户体验.
（2）优化了浏览器和服务器之间的传输，减少不必要的数据往返，减少了带宽占用.
（3）Ajax在客户端运行，承担了一部分本来由服务器承担的工作，减少了大用户量下的服务器负载。
（4）Ajax可以实现动态不刷新（局部刷新）
缺点：
（1）安全问题 AJAX暴露了与服务器交互的细节。
（2）对搜索引擎的支持比较弱。
（3）不容易调试。
（Q2）jsonp、 iframe、window.name、window.postMessage、服务器上设置代理页面。


5.GET和POST的区别，何时使用POST？
GET：一般用于信息获取，使用URL传递参数，对所发送信息的数量也有限制，一般在2000个字符
POST：一般用于修改服务器上的资源，对所发送的信息没有限制。
GET方式需要使用Request.QueryString来取得变量的值，而POST方式通过Request.Form来获取变量的值，
也就是说Get是通过地址栏来传值，而Post是通过提交表单来传值。
然而，在以下情况中，请使用 POST 请求：
无法使用缓存文件（更新服务器上的文件或数据库）
向服务器发送大量数据（POST 没有数据量限制）
发送包含未知字符的用户输入时，POST 比 GET 更稳定也更可靠


8.什么是闭包？
闭包，官方对闭包的解释是：一个拥有许多变量和绑定了这些变量的环境的表达式（通常是一个函数），因而这些变量也是该表达式的一部分。闭包的特点：
（1）作为一个函数变量的一个引用，当函数返回时，其处于激活状态。
（2） 一个闭包就是当一个函数返回时，一个没有释放资源的栈区。
简单的说，Javascript允许使用内部函数---即函数定义和函数表达式位于另一个函数的函数体内。而且，这些内部函数可以访问它们所在的外部函数中声明的所有局部变量、参数和声明的其他内部函数。当其中一个这样的内部函数在包含它们的外部函数之外被调用时，就会形成闭包。
9.javascript里面的继承怎么实现，如何避免原型链上面的对象共享
用构造函数和原型链的混合模式去实现继承，避免对象共享可以参考经典的extend()函数，很多前端框架都有封装的，就是用一个空函数当做中间变量
10.ajax过程
(1)创建XMLHttpRequest对象,也就是创建一个异步调用对象.
(2)创建一个新的HTTP请求,并指定该HTTP请求的方法、URL及验证信息.
(3)设置响应HTTP请求状态变化的函数.
(4)发送HTTP请求.
(5)获取异步调用返回的数据.
(6)使用JavaScript和DOM实现局部刷新.


一个页面从输入 URL 到页面加载显示完成，这个过程中都发生了什么？
（1）查找浏览器缓存
（2）DNS解析、查找该域名对应的IP地址、重定向（301）、发出第二个GET请求
（3）进行HTTP协议会话
（4）客户端发送报头(请求报头)
（5）服务器回馈报头(响应报头)
（6）html文档开始下载
（7）文档树建立，根据标记请求所需指定MIME类型的文件
（8）文件显示