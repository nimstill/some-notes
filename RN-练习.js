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

//Google Admob

source 'https://github.com/CocoaPods/Specs.git'
platform :ios,'7.0'
pod 'Google-Mobile-Ads-SDK', '~>7.0'

/*
var Thing = React.createClass ({
    render: function() {
        return (
            <p>{this.props.name}</p>
        );
    }
});

var ThingList = React.createClass({
    render: function() {
        return (
            <h1>my things:</h1>
        );
    }
});




var CommentBox = React.createClass({
    render: function(){
        return (
            <div className = "commentBox">
            Hello, world ! I am a CommentBox.
            </div>
        );
    }
});
React.render(
    <CommentBox />,
    document.getElementById('content')
);  

*/


var CommentBox = React.createClass({
    render: function(){
        return (
            <div className = "commentBox">
            <h1>Comments</h1>
            <commentlist data={this.props.data} />


            );
    }
});

ReactDom.render(
    <CommentBox data={data}>,
    document.getElementById('comtent')
);


//从服务器获取数据让我们用从服务器动态获取的数据替换硬编码的数据。我们会
//删掉 data 属性，使用一个 URL 来获取数据：

ReactDOM.render(
    <CommentBox url="/api/comments" />,
    document.getElementById('content')
);

var commentForm = React.createClass({
    e.preventDefault();
    var author = this.refs.author.value.trim();
    var text = this.refs.text.value.trim();
    if (!text || !author) {
        return;
    }
    this.refs.author.value = '';
    this.refs.text.value = '';
    return;
}),


var HelloWorld = React.createClass({
  render: function() {
    return (
      <p>
        Hello, <input type="text" placeholder="Your name here" />!
        It is {this.props.date.toTimeString()}
      </p>
    );
  }
});

setInterval(function() {
  React.render(
    <HelloWorld date={new Date()} />,
    document.getElementById('example')
  );
}, 500);


var Mytitle = React.createClass({
    getDefaultProps: function() {
        return {
            title: "Hello World"
        };
    },

    render: function() {
        return <h3>{this.props.title}</h3>
    }
})
ReactDOM.render(
    <Mytitle title - 'haha'/>,
    document.getElementById('example')
)



var MyForm = React.createClass({
    myClick: function() {
        this.refs.myInput.focus();

    },
    render: function() {
        return {
            <div>
                <input type="text" ref="myInput" />
                <input type='button' value='click' onClick={this.myClick}/>
            </div>
        }
    }
})





