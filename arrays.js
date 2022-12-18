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
console.log(newCloneArray2);
