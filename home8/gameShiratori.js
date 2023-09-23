class Shiritory {

    words = []
    game_over = false

    play(word) {
        if (word.length > 0){
            if (this.words.length === 0 || this.words[this.words.length - 1].slice(-1) === word[0] && !(this.words.includes(word))){
                this.words.push(word)
                return this.words
            }
            
            this.game_over = true
            return "game over"
        }
        return "game over"
    }

    restart() {
        this.words = []
        this.game_over = false
        return "game restarted"      
    }
}

let myShiritori = new Shiritory();

console.log(myShiritori.play("apple")); // ["apple"]
console.log(myShiritori.play("ear")); // ["apple", "ear"]
console.log(myShiritori.play("rhino")); // ["apple", "ear", "rhino"]
console.log(myShiritori.play("corn")); // "game over"

console.log(myShiritori.words); // ["apple", "ear", "rhino"]
myShiritori.restart(); // "game restarted"
console.log(myShiritori.words); // []
console.log(myShiritori.play("hostess")); // ["hostess"]
console.log(myShiritori.play("stash")); // ["hostess", "stash"]
console.log(myShiritori.play("hostess")); // "game over"