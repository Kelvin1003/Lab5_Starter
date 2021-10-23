// explore.js

const $ = (selector) => document.querySelector(selector);

let voiceList;
let talkButton;
let speakText;
let smileImg;
let voiceTypes = [];

speechSynthesis.getVoices();

window.addEventListener('DOMContentLoaded', init);


function init() {
  voiceList = $('#voice-select');
  talkButton = $('button');
  speakText = $('#text-to-speak');
  smileImg = $('header+img');

  setTimeout(() => {
    showVoiceList();
  }, 50);
  talkButton.addEventListener("click", playTalk);
}

function showVoiceList() {
  voiceTypes = speechSynthesis.getVoices();
  for (let voiceType of voiceTypes) {
    let newOption = document.createElement('option');
    newOption.textContent = `${voiceType.name} (${voiceType.lang})`;
    newOption.setAttribute('value', voiceType.name);
    voiceList.appendChild(newOption);
  }
}

function playTalk() {
  let newUtterance = new SpeechSynthesisUtterance(speakText.value);
  for(let voiceType of voiceTypes) {
    if(voiceType.name === voiceList.value) {
      newUtterance.voice = voiceType;
    }
  }
  speechSynthesis.speak(newUtterance);
  smileImg.src = "assets/images/smiling-open.png";
  newUtterance.addEventListener('end', checkSpeaking);
}

function checkSpeaking() {
  smileImg.src = "assets/images/smiling.png";
}
