var Rx = require('rxjs/Rx');

var b = jsboard.board({ attach: "game", size: "10x10" });
var x = jsboard.piece({ text: "X", fontSize: "40px", textAlign: "center" });
var o = jsboard.piece({ text: "O", fontSize: "40px", textAlign: "center"});

var keyups = Rx.Observable.fromEvent(q, 'keyup');

var turn = true;
b.cell("each").on("click", function() {
  if (b.cell(this).get()===null) {
    if (turn) { b.cell(this).place(x.clone()); }
    else      { b.cell(this).place(o.clone()); }
    turn = !turn;
  }
});

keyups.throttleTime(500).map(function(x){
    return q.val();
})
.do(function(x){
    console.log(q);
})
.subscribe(function(x){
    console.log("tata");
})