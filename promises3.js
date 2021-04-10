// Exercise 2:
// Write two functions that use Promises that you can chain! 
// The first function, makeAllCaps(), will take in an array of words and capitalize them, 
// and then the second function, sortWords(), will sort the words in alphabetical order.
// If the array contains anything but strings, it should throw an error.
// Then call these functions by * chaining * the promises
//     * /
const arrayOfWords = ["true", "bananas",true];
const complicatedArray = ["true", "banana", "true", "dirk"];

//make first letter of string capitalized
const capitalizeFirstLetter = (item) => {
    item = item.charAt(0).toUpperCase() + item.slice(1);
    return item;
}

//sort array in alphabetic order
const sortWords = (data) => {
    return data.sort();
};

//callback function for promise test
const callback = (resolve, reject) => {
    arrayOfWords.forEach(item => {
        if (typeof item !== "string") {
            reject("not ok");
        } else {
            console.log(item);
            
        };
        const checkedData = arrayOfWords.map(item => capitalizeFirstLetter(item));
        resolve(checkedData);
    })
}

const test = new Promise(callback);

test
    .then((checkedData)=>console.log(sortWords(checkedData)))
    .catch((x) => console.log(x));





// checkArrayValues(complicatedArray);
// const test = arrayOfWords.map(item => capitalizeFirstLetter(item));
// console.log(test);
// const test2 = sortWords(arrayOfWords);
// console.log(test2);



