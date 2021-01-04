const { utopianTree } = require('./UtopianTree');

describe("UtopianTree", () => {
    test("Should return 7", () => {
        expect(utopianTree(4)).toBe(7);
    });
});