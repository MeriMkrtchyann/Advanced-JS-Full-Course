const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
    isAstronaut: true,
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
    isAstronaut: true,
  },
  {
    username: "Elon Musk",
    isAstronaut: false,
  },
];

function filterByField(arr, key) {

  nowArr = arr.filter(obj => obj[key] === true)

  return nowArr

}

console.log(JSON.stringify(filterByField(users, "isAstronaut")))


