

function sum(text) {

  const objLetter = {
    'aeioulnrst': 1,
    'dg': 2,
    'bcmp': 3,
    'fhvwy': 4,
    'k': 5,
    'jx': 6,
    'qz': 7
  };

  let sumScore = text.split("")

  return sumScore.reduce((score, char) => {
    for (const letters in objLetter) {
      let keyText = letters.split("")
      if (keyText.includes(char)) {
        return score + objLetter[letters];
      }
    }
    return score;
  }, 0);
}

console.log(sum("barev"))
