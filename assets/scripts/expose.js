// expose.js


const $ = (selector) => document.querySelector(selector);

let imageChoice;
let imageShow;
let volumeChoice;
let volumeShow;
let audioShow;
let playButton;

const jsConfetti = new JSConfetti();

window.addEventListener('DOMContentLoaded', init);

function init() {
  imageChoice = $('#horn-select');
  imageShow = $('header+img');
  volumeChoice = $('#volume');
  volumeShow = $('#volume-controls img');
  audioShow = $('audio.hidden');
  playButton = $('button');

  imageChoice.addEventListener("change", changeImage);
  volumeChoice.addEventListener("input", changeVolume);
  playButton.addEventListener("click", playAudio);
}

function changeImage() {
  switch (imageChoice.value) {
    case "air-horn":
      imageShow.src = "assets/images/air-horn.svg";
      audioShow.src = "assets/audio/air-horn.mp3";
      break;
    case "car-horn":
      imageShow.src = "assets/images/car-horn.svg";
      audioShow.src = "assets/audio/car-horn.mp3";
      break;
    case "party-horn":
      imageShow.src = "assets/images/party-horn.svg";
      audioShow.src = "assets/audio/party-horn.mp3";
      break;
  }
}

function changeVolume() {
  audioShow.volume = volumeChoice.value / 100;

  if (volumeChoice.value == 0) {
    volumeShow.src = "assets/icons/volume-level-0.svg";
  }
  else if (volumeChoice.value < 33) {
    volumeShow.src = "assets/icons/volume-level-1.svg";
  }
  else if (volumeChoice.value < 67) {
    volumeShow.src = "assets/icons/volume-level-2.svg";
  }
  else {
    volumeShow.src = "assets/icons/volume-level-3.svg";
  }
}

function playAudio() {
  audioShow.volume = volumeChoice.value / 100;
  audioShow.play();

  if (imageChoice.value == "party-horn") {
    jsConfetti.addConfetti();
  }
}