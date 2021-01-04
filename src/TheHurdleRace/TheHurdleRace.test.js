const { hurdleRace } = require("./TheHurdleRace");

describe("TheHurdleRace", () => {
    test("Should return 2", () => {
        expect(hurdleRace(1, [1, 2, 3, 3, 2])).toBe(2);
    });

    test("Should return 0", () => {
        expect(hurdleRace(4, [1, 2, 3, 3, 2])).toBe(0);
    });
});
