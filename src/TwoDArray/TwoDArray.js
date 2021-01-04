/*
    See description: https://www.hackerrank.com/challenges/2d-array/problem
    @author Jorge Morla
*/

const sumHourGlass = (arr, x, y) => { 
    const top = arr[y][x] + arr[y][x + 1] + arr[y][x + 2];
    const midle = arr[y + 1][x + 1];
    const bottom = arr[y + 2][x] + arr[y + 2][x + 1] + arr[y + 2][x + 2];

    return top + midle + bottom;
}

const hourglassSum = (arr) => {

    let maxSum = -Infinity;
    for(let y = 0; y < arr.length - 2; y ++) {
        for(let x = 0; x < arr[0].length - 2; x ++) {
            const sum = sumHourGlass(arr, x, y);
            if(sum > maxSum) {
                maxSum = sum;
            }
        }
    }

    return maxSum;
}



exports.hourglassSum = hourglassSum;