function get(url) {
    return new Promise(function(resolve, reject) {
        var req = new XMLHttpRequest();
        req.open('GET', url);

        req.onload = function() {
            if (req.status == 200) {
                resolve(req.response);
            }
            else{
                reject(ERROR(req.statusText));
            }
        };

        req.onerror = function() {
            reject(Error("Network Error"));
        };
        req.send();
    });
}


get('story.json').then(funcyion(response) {
    console.log("Success!", response);
}, function(error) {
    console.error("Failed!", error);
});


