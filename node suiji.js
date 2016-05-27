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



/*

面试记录，并没有什么很好的启发
还是要靠自己
都是这样过来的
努力学习
提升自己
珍惜现在
无论如何
remember


that's all 

*/



