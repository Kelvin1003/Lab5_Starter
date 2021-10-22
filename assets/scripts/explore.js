// explore.js

const $ = (selector) => document.querySelector(selector);

let voiceList;

window.addEventListener('DOMContentLoaded', init);


function init() {
  voiceList = $('#voice-select');
//   setTimeout(() => {
//     console.log(window.speechSynthesis.getVoices());
// }, 100);
  showVoiceList();
}

function showVoiceList() {
  let voices = window.speechSynthesis.getVoices();
  setTimeout(() => {
    console.log(voices);
    for (let i = 0; i < voices.length ; i++) {
      let newOption = document.createElement('option');
      newOption.textContent = `${voices[i].name} (${voices[i].lang})`;
      newOption.setAttribute('value', voices[i].name);
      voiceList.appendChild(newOption);
    }
  }, 2000);

}

