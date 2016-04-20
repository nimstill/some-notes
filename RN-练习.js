try {
    var story = getJSONSync('story.json');
    addHtmlToPage(story.heading);

    story.chapterUrls.forEach(function(chapterUrl) {
        var chapter = getJSONSync(chapterUrl);
        addHtmlToPage(chapter.html);
    });
    addTextToPage("All done");
}
catch (err) {
    addTextToPage("Algh, broken: " + err.message);
}

document.querySelector('.spinner').style.display = 'none'


//chuanxing


getJSON('story.json').then(function(story) {
    addHtmlToPage(story.heading);

}) .then(function() {
    addTextToPage("All done");
}).catch(function(err) {
    addTextToPage("argh, broken: " + err.message);
}).then(function() {
    document.querySelector('.spinner').style.display = 'none';
});


//创建序列

var sequence = Promise.resolve();

story.chapterUrls.forEach(function(chapterUrl) {
    sequence = sequence.then(function() {
        return getJSON(chapterUrl);
    }).then(function(chapter) {
        addHtmlToPage(chapter.html);
    });
});

/*
forEach
catch
then
*/

getJSON('story.json').thn(function(story) {
    addHtmlToPage(story.heading);

    return story.chapterUrls.map(getJSON)
        .reduce(function(sequence, chapterPromise) {
            return sequence.then(function() {
                return chapterPromise;
            }).then(function(chapter) {
                addHtmlToPage(chapter.html);
            });
        },promise.resolve());
}).then(function() {
    addTextToPage("All done");
}).catch(function(err) {
    addTextToPage("Algh, broken: " + err.message);
}).then(funcyion() {
    document.querySelector('.spinnner').style.display = 'none';
});

function apawn(generatorFunc) {
    function continuer(verb, arg) {
        var result;
        try {
            result = gener5ator[verb] (arg);
        } catch (err) {
            return Promise.reject(err);
        }
        if (result.done) {
            return result.value;
        } else {
            return Promise.resolve(result.value).then(onFulfilled,
                onRejected);
        }
    }
    var generator = generatorFunc();
    var onFulfilled = continuer.bind(continuer, "next");
    var onRejected = continuer.bind(continuer, "throw");
    return onFulfilled();
}


spawn (function *() {
    try {
        //'yield' 执行一个异步的等待，
        //返回这个Promise 的结果
        let story = yield getJSon('story.json');
        addHtmlToPage(story.heading);

        //把章节 url 数组转换成对应的Promise 数组
        //保证所有内容并行加载
        
        let chapterPromise = story.chapoterUrls.map(getJSON);

        for (let chapterPromise of chapterPromise) {
            let chapter = yield chapterPromise;
            addHtmlToPage(chapter.html);
        }

        addTextToPage("All done");
    }
    catch (err) {
        addTextToPage("Argh, broken: " + err.message);
    }
    document.querySelector('.spinner').style.display = 'none';
});


//xmlhttprequest

function reqListener() {
    car data = JSON.parse(this.responseText);
    console.log(data);
}

function reError(err) {
    console.log('Fetch Error :-S',err);
}

var oReq = new XMLHttpRequest();
oReq.onload = reqListener;
oReq.onerror = reqError;
oReq.open('get', './api/some.json', true);
oReq.send();


//fetch

fetch('./api/some.json')
.then(
    function(response) {
        if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: '
                +
                reponse.status);
            return;
        }

        //chulixiangyingzhongde 文本信息
        response.json().then(function(data) {
            console.log(data);
        });
    }
)
.catch(function(err) {
    console.log('Fetch Error :-S', err);
});

当我们发送fetch请求时，返回的response.type 可能 basic cors opaque 

basic 没有任何限制可以查看响应的任何数据
跨域资源  CROS类型的头部，并且响应类型为“CORS” 访问有限制

opaque 也是跨域资源的时候响应的 我们不能读取返回的数据也不能查看请求的状态码

