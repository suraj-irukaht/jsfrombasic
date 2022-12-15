// sting indexing
let string = 'lahvlskvnsnldvowboxvnw';

// .length to find the actual length
// console.log(string.length);

//finding the last element
console.log(string[string.length - 1]);

// methods used in string

1; // trim() => it will remove the spaces present in the string

let str = '   al alk a  ';

// console.log(str.length); // the length including spaces is 13

str = str.trim(); // it will not remove the spaces inside the text
// console.log(str);
console.log(str.length);

2; // toLowerCase()

let str1 = 'EREFFnnaef';
str1 = str1.toLowerCase();
console.log(str1);

3; // toUpperCase()
str1 = str1.toUpperCase();
console.log(str1);

4; // slice()

str1 = str1.slice(0, 5); // it will give the string equal to last number
//if number in only one it will start from there and give all remaining words
console.log(str1);
