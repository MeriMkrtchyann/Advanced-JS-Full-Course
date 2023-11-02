function Playlist () {
    this.songArray = []
    this.index = 0
    this.isPlaying = false
}

function Song (title , artist){
    this.title = title
    this.artist = artist
}

Playlist.prototype.add = function (song){
    this.songArray.push(song.title)
}

Playlist.prototype.play = function (){
    if (this.isPlaying) {
        return `${this.songArray[this.index] } started`
    } 
    this.isPlaying = true
    return `${this.songArray[this.index] } started to play`
}

Playlist.prototype.stop = function (){
    return `${this.songArray[this.index] } stopped`
}

Playlist.prototype.next = function (){
    let old = this.songArray[this.index]
    if (this.index === this.songArray.length - 1){
        this.index = 0
    }else {
        this.index++
    }
    return `Hey ${old} stopped, ${this.songArray[this.index]} started`
}

const playlist = new Playlist();

const heyJude = new Song("Hey Jude", "The Beatles");
const jaded = new Song("Jaded", "Aerosmith");

playlist.add(heyJude);

playlist.add(jaded);

console.log(playlist.play()); // Hey Jude started to play
console.log(playlist.next()); // Hey Jude stopped, Jaded started
console.log(playlist.next()); // Jaded stopped, Hey Jude started
console.log(playlist.stop()); // Hey Jude stopped
console.log(playlist.play()); // Hey Jude started

