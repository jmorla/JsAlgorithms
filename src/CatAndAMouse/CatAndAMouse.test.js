const { catAndMouse } = require('./CatAndAMouse');
const { expect } = require('@jest/globals');


describe("CatAndAMouse", () => {
    test("Should return Cat B", () => {
        const result = catAndMouse(1, 2, 3);
        expect(result).toBe('Cat B')
    });

    test("Should return Mouse C", () => {
        const result = catAndMouse(1, 3, 2);
        expect(result).toBe('Mouse C')
    });
});