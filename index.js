// HOF

//  a function which accepts other functions as a parameter as well it returns the function

// map , filter

let users = [
  {
    name: "pratik ",
    class: 9,
    age: 24,
  },
  {
    name: "methli ",
    class: 9,
    age: 22,
  },
  {
    name: "vansh ",
    class: 10,
    age: 23,
  },
  {
    name: "yash ",
    class: 11,
    age: 24,
  },
  {
    name: "sejal ",
    class: 8,
    age: 20,
  },
  {
    name: "bittu ",
    class: 9,
    age: 24,
  },
];

let ans = users
  .filter((item, idx) => item.class > 10)
  .map((item, idx) => (item.age > 23 ? { ...item, name: "chips" } : item));

console.log(ans);

// c.u.r.d
// create => post
// read => getqqq
//update => put
// delete => delete
