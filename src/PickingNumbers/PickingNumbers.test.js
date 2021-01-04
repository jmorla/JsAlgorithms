const { pickingNumbers } = require("./PickingNumbers");

describe("PickingNumbers", () => {

    test("Should return 5", () => {
        expect(pickingNumbers([1,1,2,2,4,4,5,5,5])).toBe(5);
    });

});