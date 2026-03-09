function rock_paper_scissors(user, computer) {
  if (user === computer) return "Draw";
  if (user === "rock" && computer === "scissor") return "user";
  if (user === "scissor" && computer === "rock") return "computer";
  if (user === "paper" && computer === "scissor") return "computer";
  if (user === "scissor" && computer === "paper") return "user";
  if (user === "rock" && computer === "paper") return "computer";
  if (user === "paper" && computer === "rock") return "user";
}

console.log("Winner: ", rock_paper_scissors("rock", "rock"));
console.log("Winner: ", rock_paper_scissors("paper", "rock"));
console.log("Winner: ", rock_paper_scissors("rock", "paper"));
console.log("Winner: ", rock_paper_scissors("scissor", "rock"));
console.log("Winner: ", rock_paper_scissors("rock", "scissor"));
console.log("Winner: ", rock_paper_scissors("paper", "scissor"));
console.log("Winner: ", rock_paper_scissors("scissor", "paper"));

function rock_paper_scissors_OPTIMIZED(user, computer) {
  if (user === computer) return "Draw";
  if (user === "rock" && computer === "scissor") return "user";
  if (user === "scissor" && computer === "paper") return "user";
  if (user === "paper" && computer === "rock") return "user";

  return "computer";
}

console.log("Winner: ", rock_paper_scissors_OPTIMIZED("rock", "rock"));
console.log("Winner: ", rock_paper_scissors_OPTIMIZED("paper", "rock"));
console.log("Winner: ", rock_paper_scissors_OPTIMIZED("rock", "paper"));
console.log("Winner: ", rock_paper_scissors_OPTIMIZED("scissor", "rock"));
console.log("Winner: ", rock_paper_scissors_OPTIMIZED("rock", "scissor"));
console.log("Winner: ", rock_paper_scissors_OPTIMIZED("paper", "scissor"));
console.log("Winner: ", rock_paper_scissors_OPTIMIZED("scissor", "paper"));