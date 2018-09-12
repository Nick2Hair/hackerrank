let arr = [1,3,2,6,1,2];
let k = 3;

const divisibleSumPairs = ((arr, k) => {
    let intArr = arr.map(x => parseInt(x,10));
    let sum=0;
    let count=0;
    for(let i=0; i<intArr.length; i++) {
        for(let j=0; j<intArr.length; j++) {
            //console.log(intArr[i],intArr[j]);
            if(i!==j){
                sum = intArr[i]+intArr[j];
                if(sum%k===0) count++;
            }
        }
    }
    return count/2;
});

let test = divisibleSumPairs(arr, k);
console.log(test);

//Completed, but could be refactored