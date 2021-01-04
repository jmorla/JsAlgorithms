

exports.designerPdfViewer = (h, word) => {

    const OFFSET = 97;

    let tallest = 0;
    for(let c of word) {
        const index = c.charCodeAt(0) - OFFSET;
        const height = h[index];
        if(height > tallest) {
            tallest = height;
        }
    }

    return tallest * word.length;
};