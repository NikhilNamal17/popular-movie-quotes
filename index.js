let array = require("./data/data.json");

const randomNum = () => {
    return Math.floor(Math.random() * array.length);
};

module.exports.getRandomQuote = () => {
    let randNum = randomNum();

    return array[randNum].quote;
};

module.exports.getSome = (count) => {
    return array.slice(0, count);
};

module.exports.getSomeRandom = (count) => {
    let randomQuotesArray = [];
    let randomQuotesSet = new Set(); // to prevent duplicate quotes
    while (randomQuotesArray.length < count) {
        let quote = array[randomNum()];
        if (!randomQuotesSet.has(quote)) {
            randomQuotesArray.push(quote);
        }
    }
    return randomQuotesArray;
};

module.exports.getAll = () => {
    return array;
};
