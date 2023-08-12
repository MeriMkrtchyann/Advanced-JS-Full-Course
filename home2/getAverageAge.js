const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
    age: 56,
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
    age: 54,
  },
];



function getAverageAge(arr) {

  return arr.reduce((sum, value) => sum + value.age, 0) / arr.length;

}

console.log(JSON.stringify(getAverageAge(users))); 