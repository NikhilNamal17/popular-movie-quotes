const assert = require("chai").assert;
const data = require("../data/data.json");

// describe("data.json", () => {
//     it("should not contain any duplicate quotes", () => {
//         let initialLength = array.length;
//         array.forEach(element => {
//             element["quote"] = element["quote"]
//                 .replace(/['".,/#!$%^&*;:{}=\-_`~()@]/g, "")
//                 .toLowerCase();
//             element["movie"] = element["movie"]
//                 .replace(/['".,/#!$%^&*;:{}=\-_`~()@]/g, "")
//                 .toLowerCase();
//         });

//         let arrayOfString = [];
//         array.forEach(element => {
//             arrayOfString.push(JSON.stringify(element));
//         });

//         const set1 = new Set(arrayOfString);
//         assert.equal(initialLength, set1.size);
//     });
// });

describe("data.json", () => {
    it("should not contain any duplicate quotes", () => {
        let initialNumberOfQuotes = data.length;
        for (let i = 0; i < data.length; i++) {
            data[i]["quote"] = data[i]["quote"]
                .replace(/['".,/#!$%^&*;:{}=\-_`~() @]/g, "")
                .toLowerCase();
            data[i]["movie"] = data[i]["movie"]
                .replace(/['".,/#!$%^&*;:{}=\-_`~() @]/g, "")
                .toLowerCase();
        }
        let ArrayOfStringObject = [];
        for (let i = 0; i < data.length; i++) {
            ArrayOfStringObject.push(JSON.stringify(data[i]));
        }
        let setOfAllObjects = new Set(ArrayOfStringObject);
        console.log("====================================");
        console.log(setOfAllObjects);
        console.log("====================================");
        assert.equal(initialNumberOfQuotes, setOfAllObjects.size);
    });
});
