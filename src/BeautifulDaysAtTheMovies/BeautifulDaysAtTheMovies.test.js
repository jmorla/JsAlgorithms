const { beautifulDays } = require('./BeautifulDaysAtTheMovies');

describe("BeautifulDaysAtTheMovies", () => {
    test("Should return 2", () => {
        expect(beautifulDays(20, 23, 6)).toBe(2);
    });
});