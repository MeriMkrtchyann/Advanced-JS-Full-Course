/*Write a function which returns array of usernames*/

const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
  },
];

function getUserNames(arr) {

  let nameArr = []

  arr.forEach(obj => nameArr.push(obj.username))

  return nameArr

}

console.log(getUserNames(users))

