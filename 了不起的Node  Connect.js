var http = require('http')
, fs = require('fs')

var server = http.createServer(function (req, res) {
    
    if ('GET' == req.method && '/images' == req.url.substr(0, 7)
        && '.jpg' == req.url.substr(-4)) {
        //...
        fs.stat(__dirname + req.url, function (err, stat) {
            if (err|| !stat.isFile()){
                res.write(404);
                res.end('Not Found');
                return;
            }
            serve(__dirname + req.url, 'application/jpg');
        });
    }else if ('GET' == req.method && '/' == req.url) {
        serve(__dirname + '/index.html', 'text/html');
    }else {
        res.writeHead(404);
        res.end('NOt found');
    }

    function serve (path,type) {
        res.writeHead(200, { 'Content-Type': type });
        fs.createReadStream(path).pipe(res);
    }

});

server.listen(3000);



var connect = require('connect')
var server = connect.createServer();

server.use(connect.static(__dirname + '/website'));

server.listen(3000);
server.use(function (req, res, next) {
    console.error(' %s %s ', req.method, req.uel);
    next();
});

server.use(function (req, res, next) {
    if ('GET' == req.method && '/images' == req.url.substr(0, 7)) {
        //tuoguantupian
        
    } else {
        //
        next();
    }
});

server.use(function (req, res, next) {
    if ('GET' == req.method && '/' == req.url) {
        //xiangying index
        
    } else{
        //交给其他中间件去处理
        next();
    }
})；

server.use(function (req, res, next) {
    //最后一个中间件，如果到了这里，意味着无能为力，只能返回404
    res.writeHead(404);
    res.end('Not Found');
});

var connect = require('connect')
,   time = require('./request-time')

var server = connect.createServer();
server.use(connect.logger('dev'));
server.use(time({time: 500}));
server.use(function (req, res, next) {
    if ('/a' == req.url) {
        res.writeHead(200);
        res.end('Fast!');
    } else {
        next();
    }
});

server.use(function (req, res, next) {
    if ('/b' == req.url) {
        serTimeout(function () {
            res.writeHead(200);

            res.end('slow');
        }, 1000);
    }else {
        next();
    }
});

server.listen(3000);




