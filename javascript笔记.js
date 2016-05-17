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


