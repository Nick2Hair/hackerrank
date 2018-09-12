let arr = [4 ,5 ,4 ,5 ,1 ,2 ,1 ,4 ,3 ,2 ,4 ,4 ,3 ,5 ,2 ,2 ,5 ,4, 3, 2, 3, 5, 2, 1 ,5, 2, 3, 1, 2, 3, 3, 1, 2, 5];
let bd = 18;
let bm = 6;

const birthday = ((arr, bd, bm)=> {
    let count=0;
    let tempSum=0;
    
    if(arr.length < bm) return null;

    for(let i=0; i<bm; i++) {
        tempSum += arr[i];
    }

    if(tempSum === bd) count++;

    for(let i=bm; i<arr.length; i++) {
        tempSum = tempSum - arr[i - bm] + arr[i];
        console.log(tempSum);
        if(tempSum === bd) count++;
    }
    return count;
});

let test = birthday(arr, bd, bm);
console.log(test);

//Completed



//SubMaxArray Algorithm

// const birthday = ((arr,num)=> {
//     let maxSum=0;
//     let tempSum=0;
    
//     if(arr.length < num) return null;

//     for(let i=0; i<num; i++) {
//         maxSum += arr[i];
//     }
//     tempSum = maxSum;

//     for(let i=num; i<arr.length; i++) {
//         tempSum= tempSum - arr[i - num] + arr[i];
//         maxSum = Math.max(maxSum , tempSum);
//     }
//     return maxSum;
// });

// let test = birthday(arr, num);
// console.log(test);