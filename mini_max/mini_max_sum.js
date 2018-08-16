//Complete

var arr = [5,5,5,5,5];

const miniMaxSum = arr => {
    let maxInput = Math.max(...arr);
    let minInput = Math.min(...arr);
    let min =  minSum(arr, minInput);
    let max = maxSum(arr, maxInput);
    //return min, max;
    console.log(max, min);
};

const minSum = (arr, min) => {
    if(allEqual(arr)) {
        const reduce = arr.reduce((acc, val) => acc+val);
        return reduce - arr[0];
        
    }
   const minArr = arr.filter(el => {
        return el > min;
    });
    const minArrSum = minArr.reduce((acc, val) => acc+val);
    return minArrSum;
};

const maxSum = (arr, max) => {
    if(allEqual(arr)) {
        const reduce = arr.reduce((acc, val) => acc+val);
        return reduce - arr[0];
    }
   const maxArr = arr.filter(el => {
       return el < max;
    });
    const maxArrSum = maxArr.reduce((acc, val) => acc+val);
    return maxArrSum;
};

const allEqual = arr => new Set(arr).size === 1; 


miniMaxSum(arr);

