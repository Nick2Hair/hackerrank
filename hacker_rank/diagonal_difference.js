
var arr = [
    [1,2,3,4,5],
    [1,2,3,4,5],
    [1,2,3,4,5],
    [1,2,3,4,5],
    [1,2,3,4,5]

];


function diagonalDifference(arr) {

    var l = arr.length;
    var k = arr.length - 1;
    var posArr = [];
    var negArr = [];

    for(var i=0; i<l; i++) {
        for(var j=0; j<l; j++) {
            if(i===j) {
                posArr.push(arr[i][j]);
            }
            if(j+i===l-1) {
                negArr.push(arr[i][j]);
            }
        }
    }
    // for(var i=0; i<l; i++) {
    //     for(var j=l-1; j>=0; j--) {
    //         if(j+i===l-1) {
    //             negArr.push(arr[i][j]);
    //         }
    //     }
    // }


   var pos = posArr.reduce((acc, val) => acc + val);
   var neg = negArr.reduce((acc, val) => acc + val);

    console.log(posArr);
    console.log(negArr);

    var absSum = Math.abs(pos - neg);

    console.log("positive diag: "+pos
    + "\nNegative dian: "+neg
    +"\nabsValue: "+absSum);
}


diagonalDifference(arr);