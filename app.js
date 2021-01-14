const background = document.querySelector("#background"); // background derived from album cover below
const thumbnail = document.querySelector("#thumbnail"); // album cover
const song = document.querySelector("#song"); // audio object

const songArtist = document.querySelector(".song-artist"); // element where track artist appears
const songTitle = document.querySelector(".song-title"); // element where track title appears
const progressBar = document.querySelector("#progress-bar"); // element where progress bar appears
let pPause = document.querySelector("#play"); // element where play and pause image appears

songIndex = 0;
songs = ["./assets/Zoé Viu - A Night In The Desert.mp3"]; // object storing paths for audio objects
thumbnails = ["./assets/freestocks-OfaDD5o8hpk-unsplash (1).jpg"]; // object storing paths for album covers and backgrounds
songArtists = ["Zoe Viu"]; // object storing track artists
songTitles = ["A Night In The Desert"]; // object storing track titles

// function where pp (play-pause) element changes based on playing boolean value - if play button clicked, change pp.src to pause button and call song.play() and vice versa.
let playing = true;
function playPause() {
  if (playing) {
    const song = document.querySelector("#song"),
      thumbnail = document.querySelector("#thumbnail");

    pPause.src = "./assets/pause-solid.svg";
    thumbnail.style.transform = "scale(1.15)";

    song.play();
    playing = false;
  } else {
    pPause.src = "./assets/play-solid.svg";
    thumbnail.style.transform = "scale(1)";

    song.pause();
    playing = true;
  }
}

// // automatically play the next song at the end of the audio object's duration
// song.addEventListener("ended", function () {
//   nextSong();
// });

// function where songIndex is incremented, song/thumbnail image/background image/song artist/song title changes to next index value, and playPause() runs to play next track
function nextSong() {
  songIndex++;
  if (songIndex > 1) {
    songIndex = 0;
  }
  song.src = songs[songIndex];
  thumbnail.src = thumbnails[songIndex];
  background.src = thumbnails[songIndex];

  songArtist.innerHTML = songArtists[songIndex];
  songTitle.innerHTML = songTitles[songIndex];

  playing = true;
  playPause();
}

// function where songIndex is decremented, song/thumbnail image/background image/song artist/song title changes to previous index value, and playPause() runs to play previous track
function previousSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = 1;
  }
  song.src = songs[songIndex];
  thumbnail.src = thumbnails[songIndex];
  background.src = thumbnails[songIndex];

  songArtist.innerHTML = songArtists[songIndex];
  songTitle.innerHTML = songTitles[songIndex];

  playing = true;
  playPause();
}

// update progressBar.max to song object's duration, same for progressBar.value, update currentTime/duration DOM
function updateProgressValue() {
  progressBar.max = song.duration;
  progressBar.value = song.currentTime;
  if (document.querySelector(".durationTime").innerHTML === "NaN:NaN") {
    document.querySelector(".durationTime").innerHTML = "0:00";
  } else {
    document.querySelector(".durationTime").innerHTML = formatTime(
      Math.floor(song.duration)
    );
  }
}

// run updateProgressValue function every 1/2 second to show change in progressBar and song.currentTime on the DOM
setInterval(updateProgressValue, 500);

// function where progressBar.value is changed when slider thumb is dragged without auto-playing audio
function changeProgressBar() {
  song.currentTime = progressBar.value;
}
