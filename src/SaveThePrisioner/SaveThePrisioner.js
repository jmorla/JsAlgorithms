exports.saveThePrisoner = (prisioners, candies, startChairIndex) => {

    return (candies + startChairIndex - 1) % prisioners;
};
