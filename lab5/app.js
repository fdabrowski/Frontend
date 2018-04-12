var q = $('#q');
var keyups = Rx.Observable.fromEvent(q, 'keyup');

keyups.throttleTime(500).map(function(x){
    return q.val();
})
.switchMap(function(x){
    return searchWikipedia(x);
})
.do(function(x){
    console.log(x);
})
.subscribe(function(x){
    $('#results').empty();
    $('#results').append("<ul id='resultsList'></ul>");
    if(x.length) {
        for (i = 1; i < x[1].length; i++) {
            $("#resultsList").append(
                "<li>"+x[1][i] +" - <a href=" +x[3][i] +">" +x[3][i] +"</a></li>"
            );
        } 
    }
})


function searchWikipedia(term) {
    return $.ajax({
        url: 'http://en.wikipedia.org/w/api.php',
        dataType: 'jsonp',
        data: {
            action: 'opensearch',
            format: 'json',
            search: term
        }
    }).promise();
}



