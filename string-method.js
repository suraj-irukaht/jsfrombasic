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

// string conversion
//string into num
let str2 = '13';
str2 = Number(str2); // str2 = + str2
console.log(str2);

//num into string
let num = 424;
num = String(num); // num = num + ' '
console.log(num);

// undefined is defined as when we define the variable but if didn't assign any value will get undefined

//attach a click handler to the button to make it transform when clicked, via our transform() function below
// document.querySelector("[data-transform]").addEventListener("click", transform);
//flag of whether or not it is a password field or text field
var isPassword = true;
//this function will toggle the input between being a password or a text input
function transform() {
   //copy the element itself, its html source, and value text to a variable
   var myInput = document.querySelector('[data-show]');
   var oldHtml = myInput.outerHTML;
   var text = myInput.value;
   if (isPassword) {
      //replace "password" with "text" in the html if it is a password field
      var newHtml = oldHtml.replace(/password/g, 'text');
   } else {
      //replace "text" with "password" if it is a text field
      newHtml = oldHtml.replace(/text/g, 'password');
   }
   //update the html
   myInput.outerHTML = newHtml;
   //restore the text value
   myInput = document.querySelector('[data-show]');
   myInput.value = text;
   //toggle the isPassword flag
   isPassword = !isPassword;
}
