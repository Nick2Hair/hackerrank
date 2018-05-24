
var arr = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];

function aVeryBigSum(arr) {

    var sum = arr.reduce((acc,val) => acc+val);

    console.log(sum);

}

aVeryBigSum(arr);

//Completed