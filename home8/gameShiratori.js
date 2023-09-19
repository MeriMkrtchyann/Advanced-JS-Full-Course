class Shiritory {

    words = []
    game_over = false

    play(word) {

        if (!(this.words.length)){
            this.words.push(word)
            return this.words
        }

        if ( this.words[this.words.length - 1].slice(-1) === word[0] && !(this.words.includes(word))){
            this.words.push(word)
            return this.words
        }

        this.game_over = true
        return "game over"
    }

    restart() {
        this.words = []
        this.game_over = false
        return "game restarted"
           
    }
}

let myShiritori = new Shiritory();

myShiritori.play("apple"); // ["apple"]
myShiritori.play("ear"); // ["apple", "ear"]
myShiritori.play("rhino"); // ["apple", "ear", "rhino"]
myShiritori.play("corn"); // "game over"

myShiritori.words; // ["apple", "ear", "rhino"]
// Words should be accessible.
myShiritori.restart(); // "game restarted"
myShiritori.words; // []
// Words array should be set back to empty.
myShiritori.play("hostess"); // ["hostess"]
myShiritori.play("stash"); // ["hostess", "stash"]
myShiritori.play("hostess"); // "game over"