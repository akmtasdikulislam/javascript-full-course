/*
    Q12. Print first 5 Odd Numbers only

    Write a loop from 1 to 100 that:
    - Prints only 5 odd numbers
    - Then stops the loop
*/

let count = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 1) {
    count++;
    console.log(i);
  }
  if (count === 5) break;
}
