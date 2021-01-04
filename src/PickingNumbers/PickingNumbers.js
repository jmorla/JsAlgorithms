/**
 * See description https://www.hackerrank.com/challenges/picking-numbers/problem
 * 
*/

const pickingNumbers = (arr) => {

    arr = arr.sort((a, b) => a - b);

    let pivot = arr[0];
    let count = 1;
    let frecuencies = [];
    for(let i = 1; i < arr.length; i++) {
        const diference = arr[i] - pivot;
        if(diference <= 1) {
            count ++;
        } else {
            pivot = arr[i];
            frecuencies.push(count);
            count = 1;
        }
    }
    frecuencies.push(count);

    return frecuencies.sort((a, b) => b - a)[0];    
    
}


exports.pickingNumbers = pickingNumbers;


