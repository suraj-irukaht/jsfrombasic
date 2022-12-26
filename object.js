// object is a reference data type
// object store key pair value

const bio = {
   name: 'suraj',
   age: 24,
   weight: '67kg',
   hobbies: ['playing', 'reading'],
};

// console.log(bio);
let name = bio.name.toUpperCase().substring(0, 3);
// console.log(name);

let hobbies = bio.hobbies;
hobbies.unshift('training');
// console.log(hobbies);

let hobbiesReadv = hobbies.pop();
// console.log(hobbiesReadv);

// console.log(hobbies);

// computed Properties

const key1 = 'keyI';
const key2 = 'keyII';

const val1 = 'valI';
const val2 = 'valII';

const myObj = {
   [key1]: val1,
   [key2]: val2,
};

// console.log(myObj);

// Spread Operator in objects

const obj1 = {
   name: 'aakh',
   class: 'iv',
};

const obj2 = {
   name: 'hi',
   class: 'v',
};
// note if we have same number of key name in obj
// it will automatically replace previous key: value with new one

const newObj = { ...obj1, ...obj2 };

// console.log(newObj);

const obj3 = {
   name: 'aakh',
   class: 'iv',
};

const obj4 = {
   name1: 'hi',
   class2: 'v',
};

const newObj2 = { ...obj3, ...obj4 };
// console.log(newObj2);

// object destructuring

const ranData = {
   person: 'pablo',
   interest: 'gaming',
   age: 12,
   height: 'undefined',
};

let { person, interest, ...newRan } = ranData;
// here we can also change the variable name
// let { person: val1, interest: val2, ...newRan } = ranData;

console.log(newRan);

// nested destructuring

const users = [
   {
      id: 1,
      fName: 'reg',
      gender: 'male',
      age: 10,
   },
   {
      id: 2,
      fName: 'pooja',
      gender: 'female',
      age: 14,
   },
   {
      id: 3,
      fName: 'sun',
      gender: 'male',
      age: 3,
   },
];

const [user1, user2, user3] = users;
// user1 store all the data from 1st obj and so on..

// What if we want to print specific value of the obj and store in variable

//by leaving nothing we can skip the object or array in destructuring

const [{ fName: user1Fname }, , { fName: user2Fname }] = users;

console.log(user1Fname, user2Fname);
