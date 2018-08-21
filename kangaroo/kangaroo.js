let x1=0; //k1
let v1=3; //k1 jump distance
let x2=4; //k2
let v2=2; //k2 jump distance

const kangaroo = ((x1, v1, x2, v2) =>{
    let y=0; // # jumps
    let cond = ((x1-x2) / (v2-v1));
    let result;

    if(x1<x2 && v1<v2) result = 'NO';
    if(x2<x1 && v2<v1) result = 'NO';

    while(y<=10000) {
        if(y === cond) {
            result = 'YES';
            break;
        }else {
        y++;
        if(y===10000) return 'NO';
        }
    }

    return result;
});

let test = kangaroo(x1, v1, x2, v2);
console.log(test);

//Complete