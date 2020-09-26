//https://www.hackerrank.com/challenges/the-birthday-bar/problem

function birthday(s, d, m) {
    let count = 0;
    for(let i=0; i<s.length; i++) {
        let res = 0;
        for(let j=0; j<m; j++) {
            let c = i + j;
            res += s[c];
        }
        if (d === res) {
            count++;
        }
    }
    console.log(count);
    return count;
}

birthday([2,2,1,3,2], 4, 2); // 2
birthday([1,2,1,3,2], 3, 2); // 2
birthday([1,1,1,1,1,1], 3, 2); // 0
birthday([4], 4, 1); // 1

/*
sum of integers = day
length = month;
*/