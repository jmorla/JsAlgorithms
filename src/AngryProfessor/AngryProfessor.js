
exports.angryProfessor = (k, a) => {
    return a.filter(i => i <= 0).length >= k ? 'NO' : 'YES';
};