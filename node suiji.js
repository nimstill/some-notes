var count = 0
, users = {}
conn.setEncoding('utf8');
var nickname;
conn.on('data', function (data) {
    data = data.replace('\r\n', '');
    if (!nickname) {
        if (users[data]) {
            conn.write('\033[93m> nickname already in use. try again:\033[39m ');
            return;
        }else {
            nickname = data;
            users[nickname] = conn;
            for (var in users) {
                users[i].write('\033[90m > ' + nickname + ' joined the room\033[39m\n');
            }
        }
    }
    else {
        for (var i in users) {
            if (i != nickname) {
                users[i].write('\033[96m > ' + nickname + ':\033[39m ' +data + '\n');
            }
        }
    }
    conn.on('close', function () {
        count--;
        delete users[nickname];
    });
    function broadcast (msg, exceptMyself) {
        for (var i in users) {
            if (!exceptMyself || i != nickname) {
                users[i].write(msg);
            }
        }
    }
    conn.on('data', function (data) {
        broadcast('\033[90m > ' + nickname + 'joined the room\033[39m\n');
        broadcast('\033[93m > ' +nickname + ':\033[39m ' + data + '\n', true);
        conn.on('close', function() {
            broadcast('\033[90m > ' + nickname + 'left the room \033[39\n');
        });
    })
})


//加油啊！


net.connect(port[[, host], callback])
var client = net.connect(3000, 'localhost');
client.on('connect', function () {});
net.connect(300, 'localhost', function () {});
var colent = net.connect(6667, 'irc.freenode.net')
client.setEncoding('utf-8')
client.on('connect, function (' {
    client.write('NICK mynick\r\n');
    client.write('USER mynick 0 * :realname\r\n');
    client.write('JOIN #node.js\r\n')
});



var toString = Object.prototype.toString;

var isString = function (obj) {
    return toString.call(obj) == '[object String]';
};

var isFunction = function (obj) {
    return toString.call(obj) == '[object Function]';
};


var isType = function (type) {
    return function (obj) {
        return toString.call(obj) == '[object ' + type + ']';
    };
};

var isString = isType('String');
var isFunction = isType('Function');


banner 效果

<html>
 <head></head>
 <body>
  <div class="index_topbanner_wrap" data-bgcolor=""> 
   <div id="topCurtain" class="wrap index_topbanner" style="" data-tpa=""> 
    <a class="big_topbanner" target="_blank" data-ref="" href="" title="" style="display: block;"> <img alt="" src="" /> </a> 
    <a id="smallTopBanner" class="small_topbanner" style="display: none;" target="_blank" data-ref="" 
    href="" title=""> <span class="index_topbanner_fold index_topbanner_unfold" title="点击-展开"> 收起 
      <s></s> </span> </a>
   </div>
   <a id="smallTopBanner" class="small_topbanner" style="display: none;" target="_blank" data-ref=""
    href="" title=""> </a>
  </div>
 </body>
</html>

.index_topbanner {
    width: 17px;
    height: 38px;
    line-height: 16px;
    overflow: hidden;
    padding-top: 2px;
    color: #FFF;
    position: absolute;
    right: 21px;
    cursor: pointer;
    top: 0;
    display: block;
    text-align: center;
    background: #666;
}

jquery slideDown() 


