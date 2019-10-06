const data = require('../data/data.json');

describe('is the quote valid', () => {
	test('All items need to have a year', () => {
		// Make sure the item has a year
		data.forEach((quotes) => {
			expect(quotes).toMatchSnapshot({
			  year: expect.any(Number || null)
			});
		});
	});
	
	test('All items need to have a source', () => {
		// Make sure the item has a source
		data.forEach((quotes) => {
			expect(quotes).toMatchSnapshot({
			  title: expect.any(String)
			});
		});
	});
	
	test('All items need to have a quote', () => {
		// Make sure the item has a quote
		data.forEach((quotes) => {
			expect(quotes).toMatchSnapshot({
			  quote: expect.any(String)
			});
		});
	});

	test('All items need to have a type', () => {
		// Make sure the item has a type
		// TODO Refine to types permitted
		data.forEach((quotes) => {
			expect(quotes).toMatchSnapshot({
			  type: expect.any(String)
			});
		});
	});
});