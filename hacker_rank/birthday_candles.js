var age = 4;

var arr = [3,2,1,3];

function candles(arr) {
    
    var max = arr.reduce((acc, val) => Math.max(acc, val));

    var output = arr.filter(function(el) {
        return max === el;
    });

    console.log(output.length);

    
}

console.log(candles(arr));

//Completed