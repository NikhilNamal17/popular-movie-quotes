const { getRandomQuote } = require('../index.js');

describe('get random quote', () => {
	test('should return random quote', () => {
		// TODO make sure the quote is random
		const quote1 = getRandomQuote();
		const quote2 = getRandomQuote();
		expect(quote1).not.toEqual(quote2);
	});
});