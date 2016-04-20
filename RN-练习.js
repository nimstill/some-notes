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


