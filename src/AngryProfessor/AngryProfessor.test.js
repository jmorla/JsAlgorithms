const { angryProfessor } = require('./AngryProfessor');

describe("AngryProfessor", () => {
    test("Should return YES", () => {
        expect(angryProfessor(3, [-1, -3, 4, 2])).toBe('YES');
    });

    test("Should return NO", () => {
        expect(angryProfessor(2, [0, -1, 2, 1])).toBe('NO');
    });
});