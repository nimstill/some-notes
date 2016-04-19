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
    document.querySelector('.spinner').style.display
 = 'none';
});

