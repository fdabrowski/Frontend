var doubles = [1,2,3].map(item => item = 2);

doubles.forEach(item => console.log(item));


// node node_modules\babel-cli\bin\babel.js lab4.js

var aShape = {
    numbers: [1,2,3],
    scale: 2,
    move() {
        console.log(this.scale)
        var self = this; // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! scope, zapamietujemy this , tutaj pomagaja lambdy
        this.numbers = this.numbers.map(function(element){
            return element = self.scale;
        });
    }
}

aShape.move();
aShape.numbers.forEach(element => {
    console.log(element);
});

// template strings ! 