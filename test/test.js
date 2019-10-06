const assert = require("chai").assert;
const array = require("../data/data.json");

describe("data.json", () => {
    it("should not contain any duplicate quotes", () => {
        let initialLength = array.length;
        array.forEach(element => {
            element["quote"] = element["quote"]
                .replace(/['".,/#!$%^&*;:{}=\-_`~()@]/g, "")
                .toLowerCase();
            element["movie"] = element["movie"]
                .replace(/['".,/#!$%^&*;:{}=\-_`~()@]/g, "")
                .toLowerCase();
        });

        let arrayOfString = [];
        array.forEach(element => {
            arrayOfString.push(JSON.stringify(element));
        });

        const set1 = new Set(arrayOfString);
        assert.equal(initialLength, set1.size);
    });
});
