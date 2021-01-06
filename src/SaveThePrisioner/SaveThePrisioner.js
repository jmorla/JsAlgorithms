exports.saveThePrisoner = (prisioners, candies, startChairIndex) => {

    return (startChairIndex + candies - 2) % prisioners + 1;
};
