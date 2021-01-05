const { saveThePrisoner } = require("./SaveThePrisioner");

describe("SaveThePrisioner", () => {
    test("Should return undefined", () => {
        expect(saveThePrisoner()).toBe(undefined);
    });
});
