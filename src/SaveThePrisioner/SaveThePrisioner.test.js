const { saveThePrisoner } = require("./SaveThePrisioner");

describe("SaveThePrisioner", () => {
    test("Should return 3", () => {
        expect(saveThePrisoner(4, 6, 2)).toBe(3);
    });

    test("Should return 2", () => {
        expect(saveThePrisoner(5, 2, 1)).toBe(2);
    });

    test("Should return 3", () => {
        expect(saveThePrisoner(5, 2, 2)).toBe(3);
    });
});
