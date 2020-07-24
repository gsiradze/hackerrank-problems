function kangaroo(x1, v1, x2, v2) {
    let answer = "NO";
    if(v1 > v2) {
        const willCatchUp = (x1 - x2) % (v2 -v1) === 0;
        if(willCatchUp) {
            answer = "YES";
        }
    }
    return answer;
}

console.log(kangaroo(0, 3, 4, 2));
console.log(kangaroo(0, 2, 5, 3));