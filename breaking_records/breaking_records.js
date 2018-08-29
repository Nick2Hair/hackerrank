let scores = [10,5,20,4,5,2,25,1];

const breakingRecords = (scores => {
    let tempHigh=0;
    let tempLow=0;
    let highCount=0;
    let lowCount=0;
    let result =[];
    tempHigh = scores[0];
    tempLow = scores[0];
    

        for(let i=0; i<scores.length; i++) {
            if(scores[i] > tempHigh) {
                tempHigh = scores[i];
                highCount++;
            }
            if(scores[i] < tempLow) {
                tempLow = scores[i];
                lowCount++;
            }
        }
        result.push(highCount);
        result.push(lowCount);
        return result;
});

let test = breakingRecords(scores);
console.log(test.join(' '));

//Complete
