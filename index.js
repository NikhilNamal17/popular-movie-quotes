const path = require('path');
const array = require(path.join(__dirname , '/data/data.json'));
const _ = require('lodash');

const randomNum = () => {
    return _.random(0, array.length);
};

const getRandomQuote = () => {
    let randNum = randomNum();

    return array[randNum].quote;
};

const getQuoteByYear = function(start, end) {
    let quotes = [];
    _.each(array, function(quote) {
        if(quote.year > start && quote.year < end ) {
            quotes.push(quote);
        }
    });
    return quotes;
}

const getAll = () => {
    return array;
};

module.exports = {
    getAll,
    getQuoteByYear,
    getRandomQuote,
}