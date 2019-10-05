let array = require("./data/data.json");

const randomNum = () => {
    return Math.floor(Math.random() * array.length);
};

module.exports.getRandomQoutes = () => {
    let randNum = randomNum();

    return array[randNum].quote;
};

module.exports.getAll = () => {
    return array;
};
