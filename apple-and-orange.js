//https://www.hackerrank.com/challenges/apple-and-orange/problem

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let applesCount = 0;
    let orangesCount = 0;

    apples.forEach(apple => {
        if((apple + a) >= s && (apple + a) <= t) {
            applesCount++;
        }
    });
    oranges.forEach(orange => {
        if((orange + b) <= t && (orange + b) >= s) {
            orangesCount++;
        }
    })
    return [applesCount, orangesCount];
}

function countApplesAndOranges2(s, t, a, b, apples, oranges) {
    return [
        apples.map(x => x + a).filter(x => x >=s && x <= t).length,
        oranges.map(x => x + b).filter(x => x >=s && x <= t).length,
    ]
}


console.log(countApplesAndOranges(7, 11, 5, 15, [ -2, 2, 1 ], [ 5, -6 ]));
console.log(countApplesAndOranges2(7, 11, 5, 15, [ -2, 2, 1 ], [ 5, -6 ]));