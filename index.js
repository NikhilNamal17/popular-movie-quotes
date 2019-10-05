let array = require("./data/data.json");

const randomNum = () => {
    return Math.floor(Math.random() * array.length);
};

exports.getRandomQoutes = () => {
    let randNum = randomNum();

    return array[randNum].quote;
};

exports.all = () => {
    return array;
};
