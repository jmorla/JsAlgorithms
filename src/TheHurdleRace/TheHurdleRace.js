

exports.hurdleRace = (k, heights) => {

    const max = heights.sort((a, b) => b - a)[0];
    return max < k ? 0 : max - k;
}