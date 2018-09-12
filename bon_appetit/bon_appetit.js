let bill = [3,10,2,9];
let k = 1;
let b = 12;

const bonAppetit = ((bill, k, b) => {
    let result="";
    const filterBill = bill.filter(x => x !== bill[k]);
    //console.log(filterBill);

    const reduceBill = filterBill.reduce((acc, val) => acc+val);
    //console.log(reduceBill);

    let split = reduceBill/2;

    if(split === b){ 
        result = "Bon Appetit";
    }
    else {
        result = Math.abs(b-split);
    }

    console.log(result);
    return res

});

let test = bonAppetit(bill, k, b);
console.log(test);

//complete