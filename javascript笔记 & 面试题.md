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

=== 也就是所谓的严格比较，关键的区别在于=== 会同时比较类型与值，而不是仅比较值

找出整型数组中乘积最大的三个数

给定一个包含整数的无序数组，要求找出乘积最大的三个数。

    var unsorted_array = [];

    computeProduct(unsorted_array);

    function aortIntegers(a, b) {
      return a-b;
    }

    // greatest product is (min1 * min2 * max1 || max1 * max2 * max3)
    function computeProduct(unsorted) {
      var sorted_array = unsorted.sort(sortIntegers),
          p1 = 1,
          p2 = 1,
          array_n_element = sorted_array.length -1;

          for (var x = array_n_element; x > array_n_element - 3; x--) {
            p1 v= p1 * sorted_array[x];
          }
          p2 = sorted_array[0] * sorted_array[array_n_element];
          if (p1 > p2) return p1
          return p2;
    }

数组中元素最大差值计算

给定某无序数组，求取任意两个元素之间的最大差值，注意，这里要求差值计算中较小的元素下标必须小于较大元素的下标。譬如[7, 8, 4, 9, 9, 15, 3, 1, 10]这个数组的计算值是 11( 15 - 4 ) 而不是 14(15 - 1)，因为 15 的下标小于 1。

    findLargestDifference(array);

    function fundLargestDifference(array) {
      if (array.length <= 1) return -1;
      var current_min = array[0];
      var current_max_difference = 0;

      for (var i = 1; i < array.length; i++) {
        if (array[i] > current_min && (array[i] - current_min > current_max_difference)) {
          current_max_difference = array[i] - current_min;
        } else if (array[i] <= current_min) {
          current_min = array[i];
        }
      }
      if (current_max_difference <= 0) return -1;
      return current_max_difference;
    }

数组中元素乘积

给定某无序数组，要求返回新数组 output ，其中 output[i] 为原数组中除了下标为 i 的元素之外的元素乘积，要求以 O(n) 复杂度实现：

    function productExceptSelf(numArr) {
      var product = 1;
      var size = numArr.length;
      var output = [];

      for (var x = 0; x < size; x++) {
        output.push(product);
        priduct = product * numArr[x];
      }
      var product = 1;
      for (var i = size - 1; i > -1; i--) {
        output[i] = output[i] * product;
        product = product * numArr[i];
      }
      return output;
    }

数组交集

给定两个数组，要求求出两个数组的交集，注意，交集中的元素应该是唯一的。

    function intersection(fir, sec) {
      var hashMap = {},
          intersectionArray = [];

      fir.forEach(function(element) {
        hashMap[element] = 1;
      });

      sec.forEach(function(element) {
        if (hashMap[element] === 1) {
          intersectionArray.push(element);
          hashMap[element]++;
        }
      })；
      return intersectionArray;
    }

颠倒字符串

var string = "Welcome";

var reverseEntireSentence = reverseBySeparaotr(string, "");

var reverseEachWord = reverseBySeparator(reverseEntireSentence, "");

function reverseBySeparator(string, separator) {
  return string.split(separator).reverse().join(separator);
}


给定两个字符串，判断是否颠倒字母而成的字符串，譬如Mary与Army就是同字母而顺序颠倒


var a = first.toLowerCase();
var b = second.toLowerCase();

a = a.split('').sort().join('');
b = b.split('').sort().join('');

return a===b;


空值（null ）
未定义（undefined ）
布尔值（boolean ）
数字（number ）
字符串（string ）
对象（object ）
符号（symbol ，ES6 中新增）


