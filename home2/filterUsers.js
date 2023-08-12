function filterUser(user, text) {

  let nowObj = user.filter(obj => {
    return obj.lang !== text
  })

  return nowObj
}

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

console.log(JSON.stringify(filterUser(users, "ru")));


