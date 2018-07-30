var a = [5,7,7];
var b = [3,6,10];
const LENGTH = 3;

function solve(a, b) {

    var alice = 0;
    var bob = 0;

    for(var i=0; i<a.length; i++) {

            if(a[i] > b[i]) {
                alice++;
            }
            if(a[i] < b[i]) {
                bob++;
            }
            else {
                alice + 0;
                bob + 0;
            }
    }
        return alice+ " " +bob;
}
 
console.log(solve(a,b));

//Completed