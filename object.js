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
