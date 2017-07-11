// Server (app.js)

var app  require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(80);

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
        console.log(data);
    });
});


// Clicent (index.html)

<script src="/socket.io/socket.io.js"></script>
<script>
    var socket = io.connect('http://localhost');

    socket.on('news', function (data) {
        console.log(data);
        socket.emit('my other event', { my: 'data' });
    });
</script>

emit ：用来发射一个事件或者说触发一个事件，第一个参数为事件名，第二个参数为要发送的数据，第三个参数为回调函数（一般省略，如需对方接受到信息后立即得到确认时，则需要用到回调函数）。 on ：用来监听一个 emit 发射的事件，第一个参数为要监听的事件名，第二个参数为一个匿名函数用来接收对方发来的数据，该匿名函数的第一个参数为接收的数据，若有第二个参数，则为要返回的函数。 socket.io 提供了三种默认的事件（客户端和服务器都有）：connect 、message 、disconnect 。当与对方建立连接后自动触发 connect 事件，当收到对方发来的数据后触发 message 事件（通常为 socket.send() 触发），当对方关闭连接后触发 disconnect 事件。

socket.emit() ：向建立该连接的客户端广播 socket.broadcast.emit() ：向除去建立该连接的客户端的所有客户端广播 io.sockets.emit() ：向所有客户端广播，等同于上面两个的和



### for Vue Project



