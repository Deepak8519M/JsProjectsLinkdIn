let index = 2;
let playingSong = false;

let track = document.createElement("audio");

let songName = document.querySelector(".song-name");
let songSinger = document.querySelector(".song-singer");
let songImage = document.querySelector(".song-image");

let playPauseImg = document.querySelector("#play-pause");
let volumeRange = document.querySelector("#volume-range");
let volSvg = document.querySelector("#vol-svg");

let songRange = document.querySelector("#song-duration");
let musicAnim = document.querySelector("#musicanim");

let playlistImg = document.querySelector("#playlist-img");
let playlist = document.querySelector(".playlist");
let playlistSong = document.querySelectorAll(".playlist-song");

let volumeImg = document.querySelector(".volume-img");

volumeImg.addEventListener("click", () => {
  if (playSong == true) {
    setInterval(() => {
      volumeRange.value += 1;
    }, 1000);
  }
});

let songs = [
  {
    name: "Ve Kamleya",
    path: "firstsong.mp3",
    image: "image1.jpg",
    singer: "Arjit Singh",
  },
  {
    name: "Apna Bana Le",
    path: "secondsong.mp3",
    image: "image2.jpg",
    singer: "Arjit Singh",
  },
  {
    name: "Pehle Be Mein",
    path: "thirdsong.mp3",
    image: "image3.jpg",
    singer: "Vishal Mishra",
  },
  {
    name: "Satrange",
    path: "fourthsong.mp3",
    image: "image4.jpg",
    singer: "Arjit Singh",
  },
];

function loadTrack(index) {
  track.src = songs[index].path;
  songName.innerHTML = songs[index].name;
  songSinger.innerHTML = songs[index].singer;
  songImage.style = `background-image: url("${songs[index].image}")`;

  volume();
  Duration();

  setInterval(() => {
    songRange.max = track.duration;
    songRange.value = track.currentTime;
  }, 1000);

  track.loop = true;
  track.load();
}

loadTrack(index);

function playPause() {
  if (playingSong == false) {
    playSong();
  } else {
    pauseSong();
  }
}

function playSong() {
  track.play();
  playingSong = true;
  playPauseImg.src = "pause.svg";
  musicAnim.style.display = "block";
}

function pauseSong() {
  track.pause();
  playingSong = false;
  playPauseImg.src = "play.svg";
  musicAnim.style.display = "none";
}

function nextSong() {
  if (index < songs.length - 1) {
    index++;
    loadTrack(index);
    playSong();
  } else {
    index = 0;
    loadTrack(index);
    playSong();
  }
}
function previousSong() {
  if (index > 0) {
    index--;
    loadTrack(index);
    playSong();
  } else {
    index = songs.length - 1;
    loadTrack(index);
    playSong();
  }
}

function volume() {
  track.volume = volumeRange.value / 100;
  if (volumeRange.value == 0) {
    volSvg.src = "mute.svg";
  } else {
    volSvg.src = "volume.svg";
  }
}

function Duration() {
  track.currentTime = songRange.value;
}

playlistImg.addEventListener("click", () => {
  playlist.classList.toggle("playlist-active");
  if (playlist.classList.contains("playlist-active")) {
    playlistImg.src = "cross.svg";
  } else {
    playlistImg.src = "playlist.svg";
  }
});

playlistSong.forEach((song, index) => {
  song.addEventListener("click", () => {
    loadTrack(index);
    playSong();
    playlist.classList.remove("playlist-active");
    playlistImg.src = "playlist.svg";
  });
});
