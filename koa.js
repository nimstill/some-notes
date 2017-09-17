const Koa = require('koa');
const app = new Koa();

app.listen(3000);

const Koa = require('koa');
const app = new Koa();

const main = ctx => {
    ctx.response.body = 'Hello World';
}

app.use(main);
app.listen(3000);

/*
Koa 默认的返回类型是text/plain，如果想返回其他类型的内容，
可以先用ctx.request.accepts判断一下，客户端希望接受什么数据（根据 HTTP Request 的Accept字段），
然后使用ctx.response.type指定返回类型。
*/

const main = ctx => {
    ctx.throw(500);
}

app.on('error', (err, ctx) =>
    console.error('server error', err);
);

const main = function(ctx) {
    const n = Number(ctx.cookies.get('view') || 0) + 1;
    ctx.cookies.set('view', n);
    ctx.response.body = n + ' views';
}

//Web 应用离不开处理表单。本质上，表单就是 POST 方法发送到服务器的键值对。koa-body模块可以用来从 POST 请求的数据体里面提取键值对。

const koaBody = require('koa-body');

const main = async function(ctx) {
    const body = ctx.request.body;
    if (!body.name) ctx.throw(400, '.name required');
    ctx.body = { name: body.name };
};

app.use(koaBody());


curl -X POST --data "name=Jack" 127.0.0.1:3000

curl -X POST --data "name" 127.0.0.1:3000



const os = require('os');
const path = require('path');
const koaBody = require('koa-body');

const main = async function(ctx) {
    const tmpdir = os.tmpdir();
    const filePaths = [];
    const files = ctx.request .body.files || {};

    for (let Key in files) {
        const file = files[key];
        const filePath = path.join(tmpdir, file.name);
        const reader = fs.createReadStream(file.path);
        const writer = fs.createWriteStream(filePath);
        reader.pipe(writer);
        filePaths.push(filePath);
    }
    ctx.body = filePaths;
}

app.use(koaBody({ multipart: true }));


