

const computeHighestPurchase = (keyboards, drives, budget) => {

    keyboards = keyboards.sort((a, b) => b - a);
    drives = drives.sort((a, b) => a - b);

    let max = -1
    for (let i = 0, j = 0; i < keyboards.length; i ++) {
        for(; j < drives.length; j++) {
            if(keyboards[i] + drives[j] > budget) {
                break;
            }
            if(keyboards[i] + drives[j] > max) {
                max = keyboards[i] + drives[j]
            }
        }
    }

    return max;
};

exports.computeHighestPurchase = computeHighestPurchase;