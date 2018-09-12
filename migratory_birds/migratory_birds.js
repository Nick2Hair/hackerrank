let arr = [1,4,4,4,5,3];

const birds = (arr => {
    let result;
    let tempMax= -Infinity;
    let frequencyCounter = {};

    for(let val of arr) {
        frequencyCounter[val] = (frequencyCounter[val] || 0) + 1;
    }
    for(let key in frequencyCounter) {
        if(frequencyCounter.hasOwnProperty(key)) {
          if(frequencyCounter[key] > tempMax) {
              result = key;
              tempMax = frequencyCounter[key];
          }
        }
    }

    return result;
});

let test = birds(arr);
console.log(test);

//completed