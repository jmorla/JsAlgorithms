const { viralAdvertising } = require('./ViralAdvertising');

describe("ViralAdvertising", () => {
    test("Should return undefined", () => {
         expect(viralAdvertising()).toBe(undefined);
    });
});
