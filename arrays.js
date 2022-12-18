// arrays
// cloning arrays

1; // spread operator

let array = ['1', '2', '3'];
let cloneArray = [...array, 'suraj', 'shahi'];
// console.log(cloneArray);

2; // slice method
let newCloneArray = array.slice(0).concat('23', 'hjj');
// console.log(newCloneArray);

3; // Concatenation method

let newCloneArray2 = [].concat(array, 'asf', 'eer');
// console.log(newCloneArray2);

array.push('addedItem');
// console.log(array);

newCloneArray2.push('newArray2added');
// console.log(newCloneArray2);

// array destructuring

let myArray = ['ff', 'aa', 'bb', 3, 6];

// array destructing is a method to save the current array
// value into new variables

// let val1 = myArray[0];
// let val2 = myArray[1];
// let val3 = myArray[2];

// this upper code can be destructured like this
// in one line
// we can store remaining value in one array using spread operator
let [val1, val2, val3, ...newDArray] = myArray;
// console.log(val1);
// console.log(val2);
// console.log(val3);

// console.log(newDArray);

// push, pop, shift, unshift

let makeArray = ['qq', 'ww', 'ee', 'rr', 'tt'];

// push will add element at last
makeArray.push('yy');
// pop will remove last element and we can store that last variable if needed
let removeArray = makeArray.pop();
// console.log(makeArray.pop('ee'));

// shift will remove first value
let removeFirstArray = makeArray.shift();
// unshift will add first value
makeArray.unshift('aa');
// console.log(makeArray);
// console.log(removeFirstArray);
// console.log(removeArray);
