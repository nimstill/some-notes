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


