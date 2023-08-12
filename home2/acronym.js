/*Convert a long phrase to its acronym*/


function acronym(text) {


  let textArr = text.split(" ")
  let nowText = ""

  textArr.forEach(value => nowText += value[0])

  return nowText.toUpperCase()
}

const nameCompane = "Prisoner of War"

console.log(acronym(nameCompane))
