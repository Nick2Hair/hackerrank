let s=7; //left point of the house
let t=11; //right point of the house
let a=5; //apple tree
let b=15; //orange tree
let apples = [-2,2,1]; //apples
let oranges = [5,-6]; //oranges
let appleCount;
let orangeCount;

//apples and oranges must land between s and t
//discard the rest

const countApplesAndOranges = (s,t,a,b, apples, oranges) => {
    let resultArr = [];
    let result;
    const filterApples = apples.filter(apple => {
        if(a+apple >=s && a+apple <=t) {
            return apple;
        }
    });
    resultArr.push(filterApples.length);

    const filterOranges = oranges.filter(orange => {
        if(b+orange >=s && b+orange <=t) {
            return orange;
        }
    });
    resultArr.push(filterOranges.length);
    result = resultArr.join(" ");
    return result;
};

let test = countApplesAndOranges(s,t,a,b,apples, oranges);
console.log(test);

//complete


