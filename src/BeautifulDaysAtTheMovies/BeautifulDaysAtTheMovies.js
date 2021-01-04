

const reverse = (number) => {
    const numberStr = number.toString();
    let r = "";
    for(i = numberStr.length - 1; i >= 0; i--) {
        r += numberStr[i];
    }
    return parseInt(r);
}

const range = (start, end) => {
    const range = [];
    for (let i = start; i <= end; i++) {
        range.push(i);
    }
    return range;
}

exports.beautifulDays = (i, j, k) => {
    return range(i, j).filter(day =>  (day - reverse(day)) % k === 0).length;
};