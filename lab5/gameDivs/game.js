var player = $('#player');
var ai = $('#ai');
var board = $('#board');

var keyups = Rx.Observable.fromEvent(document, 'keyup');

keyups.subscribe(function(x){
    move(player, x.keyCode);
})

setInterval(function () {
    var list = [37, 38, 39 ,40]
    var rand = list[Math.floor(Math.random() * list.length)];
    move(ai, rand);
},300);

function move (obj, x){
    var top = parseInt(obj.css("top"), 10);
    var right = parseInt(obj.css("right"), 10);

    if(x === 38){
        var incrementedValue = top - 50;
        if(incrementedValue >= 0) {
            obj.css("top", incrementedValue +"px");
        }
    } else if(x === 39) {
        incrementedValue = right - 50;
        if(incrementedValue >= 0) {
            obj.css("right", incrementedValue +"px");
        }
    }
    else if(x === 37) {
        var incrementedValue = right + 50;
        if(incrementedValue < 500) {
            obj.css("right", incrementedValue +"px");
        }
    }
    else if(x === 40) {
        var incrementedValue = top + 50;
        if(incrementedValue < 500) {
            obj.css("top", incrementedValue +"px");
        }
    }

    if( player.css('top') === ai.css('top') && player.css('right') === ai.css('right')){
        alert('Wygrana!!');
    }
}