//node 通过使用回调和时间机制来实现并发

//异步
function async (err, files) {
    console.log(files);
}
require('fs').readdirSync('.', async)

//要在单线程中创建能够处理高并发的高效程序，就得采用异步，事件驱动的程序
var stream = fs.createReadStream('my-file.txt');
stream.on('data', function(chunk){
    //chuliwenjianbufen
});

stream.on('end', function(chunk){
    //wenjianduquwanbi
});

