const hitBox = document.querySelector(".hitbox");
const stack = document.querySelector(".stack");
const images = stack.querySelectorAll(".stack-img");
const lyrics = stack.querySelectorAll(".lyrics");
const playButton = document.querySelector(".player");

let imgCounter = 0;

// eventListener for the background picture
hitBox.addEventListener("mouseenter", function () {
  images.forEach((img) => {
    //   first img in stack -100px then -75, -50, -25 -0
    img.style.transform = `translate(0px, ${imgCounter}px)`;
    imgCounter -= 30;
  });
});

hitBox.addEventListener("mouseout", function () {
  images.forEach((img) => {
    img.style.transform = "translate(0, 0)";
    imgCounter = 0;
  });
});

let lyricsCounter = 0;

// eventListener for the lyrics
hitBox.addEventListener("mouseenter", function () {
  lyrics.forEach((phrase) => {
    phrase.style.transform = `translate(0px, ${lyricsCounter}px)`;
    lyricsCounter -= 30;
  });
});

hitBox.addEventListener("mouseout", function () {
  lyrics.forEach((phrase) => {
    phrase.style.transform = "translate(0, 0)";
    lyricsCounter = 0;
  });
});

// eventListener for music player
let playing = true;
const song = document.querySelector(".song");
const playText = document.querySelector(".play-text");

playButton.addEventListener("click", function () {
  if (playing) {
    song.play();
    playing = false;
    playText.classList.add("play-animation");
  } else {
    song.pause();
    playing = true;
    playText.classList.remove("play-animation");
  }
});
