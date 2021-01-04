const { loadConfig } = require("./UsingPromises");


describe("test", () => {

    test("should return a promise", async () => {
        const config = await loadConfig();
    });
});