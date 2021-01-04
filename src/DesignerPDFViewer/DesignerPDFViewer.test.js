const { designerPdfViewer } = require('./DesignerPDFViewer');

describe("DesignerPDFViewer", () => {
    test("Should return 28", () => {
        expect(designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5,
             5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7], "zaba")).toBe(28);
    });
});