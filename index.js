let array = require("./data/data.json");

const randomNum = () => {
  return Math.floor(Math.random() * array.length);
};

const getQuoteByYear = (start, end) => {
  let quotes = [];
  array.forEach(item => {
    if (item.year && item.year >= start && item.year <= end) {
      quotes.push(item);
    }
  });
  return quotes.sort((a, b) =>
    a.year > b.year ? 1 : b.year > a.year ? -1 : 0
  );
};

const getRandomQuote = () => {
  let randNum = randomNum();
  return array[randNum].quote;
};

const getSomeRandom = count => {
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

const getQuotesByObject = (quote, obj) => {
  let resultArray = [];
  quote = quote.toLowerCase();
  object = obj;
  array.forEach(item => {
    item[object] = item[object].toLowerCase();
    if (item[object] && item[object] === quote) {
      resultArray.push(item);
    }
  });

  return resultArray;
};

const getQuotesByMovie = quote => {
  return getQuotesByObject(quote, "movie");
};

const getQuotesByType = quote => {
  return getQuotesByObject(quote, "type");
};

const getAll = () => {
  return array;
};

module.exports = {
  getAll,
  getRandomQuote,
  getSomeRandom,
  getQuoteByYear,
  getQuotesByMovie,
  getQuotesByType
};


const fs = require("fs");
var out = getQuotesByMovie("joker");
var jsonContent = JSON.stringify(out);
fs.writeFile("movie.json", jsonContent, "utf8", function(err) {
  if (err) {
    console.log("An error occured while writing JSON Object to File.");
    return console.log(err);
  }

  console.log("JSON file has been saved.");
});
