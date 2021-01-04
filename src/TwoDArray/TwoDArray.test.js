const { hourglassSum }  = require('./TwoDArray');


describe("2 Dimension Array", () => {
	
	
	test("Should return 28", () => {

		const testArray = [
			[-9, -9, -9,  1, 1, 1 ],
			[0, -9,  0,  4, 3, 2 ],
			[-9, -9, -9,  1, 2, 3 ],
			[0,  0,  8,  6, 6, 0 ],
			[0,  0,  0, -2, 0, 0 ],
			[0,  0,  1,  2, 4, 0 ],
		 ];

		expect(hourglassSum(testArray)).toBe(28);
	});


	test("Should return 19", () => {

		const testArray = [
			[1, 1, 1, 0, 0, 0],
			[0, 1, 0, 0, 0, 0],
			[1, 1, 1, 0, 0, 0],
			[0, 0, 2, 4, 4, 0],
			[0, 0, 0, 2, 0, 0],
			[0, 0, 1, 2, 4, 0],
		 ];

		expect(hourglassSum(testArray)).toBe(19);
	});
});
