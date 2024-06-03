// Jukebox class
class Jukebox {
constructor(albums) {
    this.albums = []
}
addAlbum(album) {
    this.albums.push(album)
}
favoriteAlbum() {
    let max = -1, fav
    for (let i = 0; i < this.albums.length; i++) {
        if (this.albums[i].played > max) {
            max = this.albums[i].played
            fav = this.albums[i]
        }
    }
    return fav.display();
}
}

// Album class
class Album {
constructor(artist, title) {
    this.artist = artist
    this.title = title
    this.played = 0
}
play() {
    this.played += 1
}
display() {
    return `${this.artist} : ${this.title}. The album has been played ${this.played} times.`
}
}

// Instantiate Jukebox and Albums
const jbox = new Jukebox();
const album1 = new Album('Operation Ivy', 'Energy')
const album2 = new Album('Blink 182', 'Dude Ranch')
const album3 = new Album('New Found Glory', 'Sticks and Stones')
const album4 = new Album("SZA", "SOS")
const album5 = new Album("Kendrick Lamar", "Mr. Morale and the Big Steppers" )

jbox.addAlbum(album1)
jbox.addAlbum(album2)
jbox.addAlbum(album3)
jbox.addAlbum(album4)
jbox.addAlbum(album5)

// Populate dropdown menu with albums
const albumDropdown = document.getElementById('albumDropdown')
jbox.albums.forEach((album, index) => {
    const listItem = document.createElement('li')
    listItem.innerHTML = `<a class="dropdown-item" href="#" data-index="${index}">${album.artist} - ${album.title}</a>`
    albumDropdown.appendChild(listItem)
})

// Selected album index
let selectedAlbumIndex = null

// Event listener for dropdown items
albumDropdown.addEventListener('click', (event) => {
if (event.target.tagName === 'A') {
    selectedAlbumIndex = event.target.getAttribute('data-index');
    document.getElementById('dropdownMenuButton').textContent = `${jbox.albums[selectedAlbumIndex].artist} - ${jbox.albums[selectedAlbumIndex].title}`
}
});

// Event listener for play button
document.getElementById('playButton').addEventListener('click', () => {
if (selectedAlbumIndex !== null) {
    jbox.albums[selectedAlbumIndex].play()
    alert(`${jbox.albums[selectedAlbumIndex].artist} - ${jbox.albums[selectedAlbumIndex].title} is now playing. Play count: ${jbox.albums[selectedAlbumIndex].played}`)
} else {
    alert('Please select an album first.')
}
});

// Event listener for show favorite album button
document.getElementById('showFavoriteAlbumButton').addEventListener('click', () => {
document.getElementById('favoriteAlbum').textContent = `Your favorite album is: ${jbox.favoriteAlbum()}`
})