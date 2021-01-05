const { viralAdvertising } = require('./ViralAdvertising');

describe("ViralAdvertising", () => {
    test("Should return 24", () => {
         expect(viralAdvertising(5)).toBe(24);
    });

    test("Should return 9", () => {
        expect(viralAdvertising(3)).toBe(9);
   });
});
