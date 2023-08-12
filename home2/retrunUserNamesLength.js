/*Write a function which returns array of lengths of user names*/

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


function getUserNamesLength(arr) {

  let nameArr = []

  arr.forEach(obj => nameArr.push(obj.username))

  let lengthArr = []

  nameArr.forEach(arr => lengthArr.push(arr.length))

  return lengthArr

}

console.log(getUserNamesLength(users));