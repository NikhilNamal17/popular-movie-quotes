let data = require("../data/data.json");
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
        var prevArrayLen = data.length;
        var newArray = arrUnique(data);
        assert.equal(prevArrayLen, newArray.length);
    });

    it('check if quotes have desired formats', () => {
        data.forEach(function(item) {
            item.quote && assert.typeOf(item.quote, 'string');
            item.movie && assert.typeOf(item.movie, 'string');
            item.type && assert.typeOf(item.type, 'string');
            item.year && assert.typeOf(item.year, 'number');
        });
    });
});


