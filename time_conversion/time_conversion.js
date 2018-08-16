const str = '07:05:45PM';



const timeConversion = (str) => {

    let strArr = str.split(':');
    let hours = Number(strArr[0]);
    let mins = strArr[1];
    let secs = strArr[2];
    let result;

    if(/pm/ig.test(secs)) {
        hours+=12;
        let resultSecs = secs.replace(/pm/ig , '');
        result = hours+":"+mins+":"+resultSecs;
    }else {
        result = str;
    }

    return result;
};

let result = timeConversion(str);

console.log(result);

//completed but working on having it work with hackerrank

