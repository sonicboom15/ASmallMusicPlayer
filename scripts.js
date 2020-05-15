var Song = /** @class */ (function () {
    function Song(name, link) {
        this.songName = name;
        this.url = link;
    }
    return Song;
}());
var PlayList = /** @class */ (function () {
    function PlayList() {
        this.songs = [];
    }
    PlayList.prototype.addSong = function (song) {
        this.songs.push(song);
    };
    return PlayList;
}());
var playlist = new PlayList();
var generatePlaylistContent = function (playlist) {
    var element = document.getElementById("songdata");
    var wordGenerator = function (element, song) {
        var li = document.createElement("li");
        li.classList.add("list-group-item");
        var div = document.createElement("div");
        div.classList.add("row");
        var nameContainer = document.createElement("div");
        nameContainer.classList.add("col");
        nameContainer.innerHTML = song.songName;
        div.appendChild(nameContainer);
        var playContainer = document.createElement("div");
        playContainer.classList.add("col");
        var playButton = document.createElement("button");
        playButton.innerHTML = "Play";
        playButton.classList.add("btn");
        playButton.classList.add("btn-primary");
        playButton.onclick = function () {
            var change = function (song) {
                var title = document.getElementById("songname");
                var player = document.getElementById("trackURL");
                title.innerHTML = song.songName;
                player.src = song.url;
                var source = document.getElementById("audiosource");
                source.load();
                source.play();
            };
            change(song);
        };
        playContainer.appendChild(playButton);
        div.appendChild(playContainer);
        li.appendChild(div);
        element.appendChild(li);
    };
    playlist.songs.forEach(function (song) {
        wordGenerator(element, song);
    });
};
var addNewURL = function () {
    var name = document.getElementById("name");
    var nameValue = name.value;
    var url = document.getElementById("url");
    var urlValue = url.value;
    name.value = "";
    var newSong = new Song(nameValue, urlValue);
    playlist.addSong(newSong);
    url.value = "";
    var element = document.getElementById("songdata");
    element.innerHTML = "";
    generatePlaylistContent(playlist);
    return false;
};
window.onload = function () {
    generatePlaylistContent(playlist);
};
