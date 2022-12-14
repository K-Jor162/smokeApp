var user1 = {
  name: "Ben",
  age: 16,
  points: 1457
};
var user2 = {
  name: "Joanna",
  age: 19,
  points: 1952
};
var user3 = {
  name: "TJ",
  age: 31,
  points: 4457
};

if (user1.age >= 18) {
  console.log("You Are Old Enough To Smoke");
} else if (user1.age == 17) {
  console.log("Next year my guy.");
} else {
  console.log("I'm sorry, you are not old enough to smoke");
}
if (user2.age >= 18) {
  console.log("You Are Old Enough To Smoke");
} else {
  console.log("I'm sorry, you are not old enough to smoke");
}
if (user3.age >= 18) {
  console.log("You Are Old Enough To Smoke");
} else {
  console.log("I'm sorry, you are not old enough to smoke");
}
