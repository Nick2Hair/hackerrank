const str = '07:05:45pm';



const timeConversion = (str) => {

    let strArr = str.split(':');
    let hours = Number(strArr[0]);
    let mins = strArr[1];
    let secs = strArr[2];
    let result;

    if(/pm/ig.test(secs)) {
        if(hours === 12) {
            result = constructStrPM(hours, mins, secs);
        }else {
        hours+=12;
        result =  constructStrPM(hours, mins, secs);
        }
    }else {
        if(hours === 12) {
            hours -= 12;
            result = constructStrAM(hours, mins, secs);
        }else {
            result = constructStrAM(hours, mins, secs);
        }
    }

    return result;
};

const constructStrAM = (hours, mins, secs) => {
    let resultSecs = secs.replace(/am/ig , '');
   let result = '0'+hours.toString()+":"+mins+":"+resultSecs;
    return result;
};

const constructStrPM = (hours, mins, secs) => {
    let resultSecs = secs.replace(/pm/ig , '');
    let result = hours.toString()+":"+mins+":"+resultSecs;
    return result;
};

let result = timeConversion(str);

console.log(result);

//completed

