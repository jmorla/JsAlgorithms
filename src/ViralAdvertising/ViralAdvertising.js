const computeLikesOfTheDay = (shares) => Math.floor(shares / 2);

exports.viralAdvertising = (lastDay) => {

    let sharedThisDay = 5;
    let totalLiked = 0;
    for(let i = 0; i < lastDay; i++) {
        const likedThisDay = computeLikesOfTheDay(sharedThisDay);
        totalLiked += likedThisDay;
        sharedThisDay = likedThisDay * 3;
    }
    return totalLiked;
};