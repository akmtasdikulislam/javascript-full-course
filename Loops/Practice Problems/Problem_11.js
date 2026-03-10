/*
    Q11. Skip multiples of 3

    Write a loop from 1 to 20 that:
    - Skips numbers divisible by 3
    - Prints all others
*/

for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) {
    continue;
  }
  console.log(i);
}
