const movieQuote = require("popular-movie-quotes");

console.log(movieQuote.getAll()); //get an array with all available quotes.

console.log(movieQuote.getSome(10)); // get an array of 10 quotes.

console.log(movieQuote.getSomeRandom(10)); // get an array of 10 random quotes.

console.log(movieQuote.getRandomQuote()); // get a random quote

