// switch statement is same as if else if condition

let age = 15;
if (age > 18) {
   console.log('u can go club');
} else if (age <= 10) {
   console.log('u are eligible for child youth club');
} else if (age < 18 && age > 10) {
   console.log('u r teenager');
} else {
   console.log('u r not human');
}

switch (age) {
   case 17:
      console.log('u r teenager');
      break;
   case 10:
      console.log('u are eligible for child youth club');
      break;
   case 18:
      console.log('u can go club');
      break;
   default:
      console.log('u r not human');
}

// this upper conditions can be execute by switch statement also
