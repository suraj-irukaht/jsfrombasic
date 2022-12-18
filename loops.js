let num = 10;
let total = 0;
let i = 0;

// console.log(total);

// while (i <= num) {
//    total = total + i;
//    i++;
// }

// console.log(total);

for (i = 0; i <= num; i++) {
   total = total + i;
}
// console.log(total);

// break and continue in loops
// break if condition true the loops terminate
for (i = 1; i <= 10; i++) {
   if (i === 4) {
      break;
   }
   //    console.log(i);
}

// continue if condition true the loops skips that condition
for (i = 1; i <= 10; i++) {
   if (i === 5) {
      continue;
   }
   console.log(i);
}
