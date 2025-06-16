let Marks = [25, 30, 35, 40, 55];
let bonus = Marks.map((item) => item + 5);
let Passed = Marks.filter((item) => item >= 40);
let Total = Marks.reduce((acc, num) => acc + num, 0);
console.log(bonus);
console.log(Passed);
console.log(Total);

const Player = [
  { name: "Raj", score: 80 },
  { name: "Simran", score: 35 },
  { name: "Vansh", score: 50 },
  { name: "Yash", score: 20 },
];
let Score = Player.filter((num) => num.score >= 40);
let Calculate = Score.map((num) => num.score * 10);
let Winner = Calculate.reduce((acc, num) => acc + num, 0);
console.log(Score);
console.log(Calculate);
console.log(Winner);