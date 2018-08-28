let arr1 = [2,4];
let arr2 = [16,32,96];

function getTotalX(a, b) {
    let validX = [];

    const minA = Math.min(...a);
    const maxB = Math.max(...b);
    const isFactorOf = (arrItem, x) => x % arrItem === 0;
    const isFactorFor = (arrItem, x) => arrItem % x === 0; 

    for(let x = minA; x <= maxB; x++) {
        if (a.every(av => isFactorOf(av, x))) {
            if(b.every(bv => isFactorFor(bv, x))) {
                validX.push(x);
            }            
        }
    }

    return validX.length;
}

let test = getTotalX(arr1, arr2);
console.log(test);

//Solution - not solved - trying to understand logic and refactor once
//I understand