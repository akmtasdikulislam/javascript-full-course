// Q8. Ask the user for a number and print whether each number from 1 to that number is even or odd.

let val = prompt("Give a number");
for (let i = 1; i <= val; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  } else {
    console.log(`${i} is odd`);
  }
}
