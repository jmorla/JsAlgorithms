/**
 * se details https://www.hackerrank.com/challenges/circular-array-rotation/problem
 * 
*/

exports.circularArrayRotation = (a, k, queries) => {

    for(let i = 0; i < k; i ++) {
        const taken = a.pop();
        a.unshift(taken);
    }
    
    return queries.map(index => a[index]);
};
