const data = require("../data/data.json");
const _ = require("lodash");

const assert = require("chai").assert;

describe("data.json", () => {
    it("should not contain duplicates ", () => {
        function arrUnique(arr) {
            var cleaned = [];
            arr.forEach(function(itm) {
                var unique = true;
                cleaned.forEach(function(itm2) {
                    if (_.isEqual(itm, itm2)) unique = false;
                });
                if (unique) {
                    cleaned.push(itm);
                }
            });
            return cleaned;
        }
        var output = arrUnique(data);
        var prevArray = data.length;

        assert.equal(prevArray, output.length);
    });
});
