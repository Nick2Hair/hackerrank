/*If the difference between the grade 
and the next multiple of 5 is less than 3
(multOf5) < 3 round grade up to the next multiple of 5

*/

let grades = [73,67,38,33];

const gradingStudents = (grades) => {

    const mapArr = grades.map(grade => {
        const FIVE = 5;
        let mod = grade % 5;
        let mult5 = (grade - mod) +FIVE;
        let condition = mult5 -grade;
        
        if(condition < 3 && mult5 >=40) {
           return mult5;
        }else{
            return grade;
        }
    });
    return mapArr;
};


let test = gradingStudents(grades);
console.log(test);

//completed