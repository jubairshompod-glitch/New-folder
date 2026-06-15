// const person = {
//   name: "Shompod",
//   age: 25
// };

// const name = person.name;
// const age = person.age;

// console.log(name);
// console.log(age);


// //আগে এই ভাবে অবজেক্ট লিখতাম 

// //এখন এই ভাবে লিখব

// const person = {
//   name: "Shompod",
//   age: 25
// };

// const { name, age } = person;

// console.log(name);
// console.log(age);


// //ভেলূ স্কিপ করা

// const numbers = [10, 20, 30, 40];

// const [first, , third] = numbers;

// console.log(first); // 10
// console.log(third); // 30


// //ডিফল্ট ভেলূ

// const colors = ["Red"];

// const [first, second = "Blue"] = colors;

// console.log(first);  // Red
// console.log(second); // Blue


// //রেস্ট অপারেটর

// const numbers = [10, 20, 30, 40, 50];

// const [first, second, ...others] = numbers;

// console.log(first);   // 10
// console.log(second);  // 20
// console.log(others);  // [30,40,50]


// //ভেরিয়েবল Swap

// let a = 10;
// let b = 20;

// [a, b] = [b, a];

// console.log(a); // 20
// console.log(b); // 10


// //ফাংশন থেকে ডিসট্রাকচারিং 

// function getUser() {
//   return ["Shompod", 25];
// }

// const [name, age] = getUser();

// console.log(name);
// console.log(age);


// //String destrucaring

// const name = "Hello";

// const [a, b, c] = name;

// console.log(a); // H
// console.log(b); // e
// console.log(c); // l


// //javascript rest operator

// const word = "Hello";

// const [first, ...rest] = word;

// console.log(first); // H
// console.log(rest);


// Function parameter destrucaring

const person={
  name: "shompod",
  age : 21,
  country: "Bangladesh",
}


function showPerson({name, age, country}){

  console.log(name, country, age);

}
showPerson(person);
