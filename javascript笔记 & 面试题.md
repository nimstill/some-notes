    捕获，目标，冒 泡阶段


    var foo = "11"+2-"1";
    console.log(foo);
    console.log(typeof foo);

    “11”+2 =112  string
    112-1=111 number

    //已知数组var stringArray = [“This”, “is”, “Baidu”, “Campus”]，Alert出”This is Baidu Campus”

    alert(stringArray.join(""))

    //已知有字符串foo=”get-element-by-id”,写一个function将其转化成驼峰表示法”getElementById”。

    function combo(msg){
        var arr=msg.split("-");
        for(var i=1;i<arr.length;i++){
            arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].substr(1,arr[i].length-1);
        }
        msg=arr.join("");
        return msg;
    }

    //substr() 方法可在字符串中抽取从 start 下标开始的指定数目的字符。
    function combo(msg) {
        var arr=msg.split("-");
        for(var i=1; i<arr.length; i++){
            arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].sbustr(1,arr[i].length-1);
        }
        msg=arr.join("");
        return msg;
    }

    var numberArray = [3,6,2,4,1,5];
    console.log(numberArray.reverse());
    //paixu

    var numberArray = [3,6,2,4,1,5];
    function sortNum(a,b){
        return b-a;
    }
    console.log(numberArray.sort(sortNum));


    //.输出今天的日期，以YYYY-MM-DD的方式，比如今天是2014年9月26日，则输出2014-09-26

    var d = new Date();
    // 获取年，getFullYear()返回4位的数字
    var year = d.getFullYear();
    // 获取月，月份比较特殊，0是1月，11是12月
    var month = d.getMonth() + 1;
    // 变成两位
    month = month < 10 ? '0' + month : month;
    // 获取日
    var day = d.getDate();
    day = day < 10 ? '0' + day : day;
    alert(year + '-' + month + '-' + day);

    <tr><td>{$id}</td><td>{$id}_{$name}</td></tr>”.replace(/{\$id}/g, ’10’).replace(/{\$name}/g, ‘Tony’);

    function escapeHtml(str) {
    return str.replace(/[<>”&]/g, function(match) {
        switch (match) {
                       case “<”:
                          return “&lt;”;
                       case “>”:
                          return “&gt;”;
                       case “&”:
                          return “&amp;”;
                       case “\””:
                          return “&quot;”;
          }
      });
    }

    var array1 = ['a','b','c'];
    var bArray = ['d','e','f'];
    var cArray = array1.concat(bArray);
    cArray.splice(1,1);    ///


    //有这样一个URL：http://item.taobao.com/item.htm?a=1&b=2&c=&d=xxx&e，请写一段JS程序提取URL中的各个GET参数(参数名和参数个数不确定)，将其按key-value形式返回到一个json结构中，如{a:’1′, b:’2′, c:”, d:’xxx’, e:undefined}。


    function serilizeUrl(url) {
        var result = {};
        url = url.split("?")[1];
        var map = url.split("&");
        for(var i = 0, len = map.length; i < len; i++) {
            result[map[i].split("=")[0]] = map[i].split("=")[1];
        }
        return result;
    }
    var regMail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/;

    for(var i=1;i<=3;i++){
      setTimeout(function(){
          console.log(i);    
      },0);  
    };

    444

    Javascript事件处理器在线程空闲之前不会运行

    for(var i=1;i<=3;i++){
       setTimeout((function(a){  //改成立即执行函数
           console.log(a);    
       })(i),0);  
    };

    var lis=document.getElementById('2223').getElementsByTagName('li');
    for(var i=0;i<3;i++)
    {
        lis[i].index=i;
        lis[i].onclick=function(){
            alert(this.index);
        };
    }



Event Bubbling 即指某个事件不仅会触发当前元素，还会以嵌套顺序传递到父元素中。直观而言就是对于某个子元素的点击事件同样会被父元素的点击事件处理器捕获。避免 Event Bubbling 的方式可以使用event.stopPropagation() 或者 IE 9 以下使用event.cancelBubble。

