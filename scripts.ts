class Song{
    songName: String;
    url: String;

    constructor(name, link){
        this.songName = name;
        this.url = link;
    }
}
class PlayList{
    songs : Song[]

    constructor(){
        this.songs = []
    }
    addSong(song:Song){
        this.songs.push(song);
    }
}

let playlist = new PlayList();
const generatePlaylistContent = (playlist:PlayList) =>{
    let element = <HTMLDivElement>document.getElementById("songdata");
    const wordGenerator = (element,song) =>{
        let div = <HTMLDivElement>document.createElement("div");
        div.classList.add("row");
        div.classList.add("col");

        let nameContainer  = <HTMLDivElement>document.createElement("div");
        nameContainer.classList.add("col");
        nameContainer.classList.add("text-muted")
        nameContainer.innerHTML = song.songName;
        div.appendChild(nameContainer);

        let playContainer = <HTMLDivElement>document.createElement("div");
        playContainer.classList.add("col");

        let playButton = <HTMLButtonElement>document.createElement("button");
        playButton.innerHTML = "Play";
        playButton.classList.add("btn");
        playButton.classList.add("btn-primary")
        playContainer.appendChild(playButton);
        playButton.onclick = () => {
            let change = (song) =>{
                let title = <HTMLDivElement>document.getElementById("songname");
                let player = <HTMLSourceElement>document.getElementById("trackURL");
                title.innerHTML = song.songName;
                player.src = song.url;
                let source = <HTMLAudioElement>document.getElementById("audiosource");
                source.load();
                source.play();
            }
            change(song);
        }
        div.appendChild(playContainer);

        element.appendChild(div);
    }
    playlist.songs.forEach(song => {
        wordGenerator(element,song);
    });

}

const addNewURL = () =>{
    let name = <HTMLInputElement>document.getElementById("name")
    let nameValue = name.value;
    let url = <HTMLInputElement>document.getElementById("url")
    let urlValue = url.value;
    let newSong = new Song(nameValue,urlValue);
    playlist.addSong(newSong);
    let element = <HTMLDivElement>document.getElementById("songdata");
    element.innerHTML = "";
    generatePlaylistContent(playlist);
    return false;
}

window.onload = () =>{
    generatePlaylistContent(playlist)
}