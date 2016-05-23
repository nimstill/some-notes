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
    
})
