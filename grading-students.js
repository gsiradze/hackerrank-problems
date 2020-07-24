//https://www.hackerrank.com/challenges/grading/problem

function gradingStudents(grades) {
    const res = [];

    grades.forEach(x => {
       if(Math.abs(x%5 -5) < 3) {
            const answer = Math.ceil(x/5)*5;
            res.push(answer < 40 ? x : answer)
        } else {
            res.push(x);
        }
    });
    return res;
}

console.log(gradingStudents([
    4,
    73,
    67,
    38,
    33
]));