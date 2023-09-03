/*
Add: Pushes the passed-through song to the songs array
Play: Plays current song based on array index
Stop: Holds place in array, but calls above stop song prototype function
Next: Sets the next song in the songs array, calling the above play prototype function
Song should take in two arguments, title and artist, which should both be added as properties when
the Song constructor function is used.
Play: Sets the song as playing using isPlaying
Stop: Sets the song as not playing (isPlaying = false)
*/

function Playlist () {

    this.songArray = []
    this.index = 0
    this.isPlaying

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
        this.isPlaying = true
        return `${this.songArray[this.index] } started`
        
    } 
    this.isPlaying = true
    return `${this.songArray[this.index] } started to play`
}

Playlist.prototype.stop = function (){
    return `${this.songArray[this.index] } stopped`
}

Playlist.prototype.next = function (){
    if (this.index === this.songArray.length - 1){
        this.index = 0
        return
    }
        this.index++        
}

const playlist = new Playlist();

const heyJude = new Song("Hey Jude", "The Beatles");
const jaded = new Song("Jaded", "Aerosmith");

playlist.add(heyJude);

playlist.add(jaded);

playlist.play(); // Hey Jude started to play
playlist.next(); // Hey Jude stopped, Jaded started
playlist.next(); // Jaded stopped, Hey Jude started
playlist.stop(); // Hey Jude stopped
playlist.play(); // Hey Jude started

