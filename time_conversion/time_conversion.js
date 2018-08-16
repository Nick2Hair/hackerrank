const str = '12:05:45pm';



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
    return constructStr(hours, mins, secs);
};

const constructStrPM = (hours, mins, secs) => {
    return constructStr(hours, mins, secs);
};

const constructStr = (hours, mins, secs) => {
    let resultHrs = hours.toString();
    let resultSecs;
    if(/am/ig.test(secs)) {
        resultHrs = '0'+ resultHrs;
        resultSecs = secs.replace(/am/ig , ''); 
    }else {
        resultSecs = secs.replace(/pm/ig , '');
    }
    let result = resultHrs+":"+mins+":"+resultSecs;
    return result;
};

let result = timeConversion(str);

console.log(result);

//completed and refactored

