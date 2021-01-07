const { circularArrayRotation } = require("./CircularArrayRotation");

describe("CircularArrayRotation", () => {
    test("Should return undefined", () => {
        expect(circularArrayRotation([3, 4, 5], 2, [1, 2])).toEqual(expect.arrayContaining([5, 3]))
    });
});
