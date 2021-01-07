import playPiano from "./playPiano.js";

export default function playOnKeyboard(key, volume) {
  window.location.href = "#Octave-4";
  document.getElementById("drum-machine").focus();

  switch (key) {
    case "S":
    case "s":
      document.getElementById("A4").setAttribute("style", null);
      playPiano("A4", volume / 100);
      document
        .getElementById("A4")
        .setAttribute("style", "background-color: blue; padding-top: 130px;");
      setTimeout(function () {
        document.getElementById("A4").setAttribute("style", null);
      }, 500);
      break;
    case "D":
    case "d":
      document.getElementById("B4").setAttribute("style", null);
      playPiano("B4", volume / 100);
      document
        .getElementById("B4")
        .setAttribute("style", "background-color: blue; padding-top: 130px;");
      setTimeout(function () {
        document.getElementById("B4").setAttribute("style", null);
      }, 500);
      break;
    case "F":
    case "f":
      document.getElementById("C5").setAttribute("style", null);
      playPiano("C5", volume / 100);
      document
        .getElementById("C5")
        .setAttribute("style", "background-color: blue; padding-top: 130px;");
      setTimeout(function () {
        document.getElementById("C5").setAttribute("style", null);
      }, 500);
      break;
    case "G":
    case "g":
      document.getElementById("D5").setAttribute("style", null);
      playPiano("D5", volume / 100);
      document
        .getElementById("D5")
        .setAttribute("style", "background-color: blue; padding-top: 130px;");
      setTimeout(function () {
        document.getElementById("D5").setAttribute("style", null);
      }, 500);
      break;
    case "H":
    case "h":
      document.getElementById("E5").setAttribute("style", null);
      playPiano("E5", volume / 100);
      document
        .getElementById("E5")
        .setAttribute("style", "background-color: blue; padding-top: 130px;");
      setTimeout(function () {
        document.getElementById("E5").setAttribute("style", null);
      }, 500);
      break;
    case "J":
    case "j":
      document.getElementById("F5").setAttribute("style", null);
      playPiano("F5", volume / 100);
      document
        .getElementById("F5")
        .setAttribute("style", "background-color: blue; padding-top: 130px;");
      setTimeout(function () {
        document.getElementById("F5").setAttribute("style", null);
      }, 500);
      break;
    case "K":
    case "k":
      document.getElementById("G5").setAttribute("style", null);
      playPiano("G5", volume / 100);
      document
        .getElementById("G5")
        .setAttribute("style", "background-color: blue; padding-top: 130px;");
      setTimeout(function () {
        document.getElementById("G5").setAttribute("style", null);
      }, 500);
      break;
    case "E":
    case "e":
      document.getElementById("Bb4").setAttribute("style", null);
      playPiano("Bb4", volume / 100);
      document
        .getElementById("Bb4")
        .setAttribute("style", "background-color: red; padding-top: initial;");
      setTimeout(function () {
        document.getElementById("Bb4").setAttribute("style", null);
      }, 500);
      break;
    case "T":
    case "t":
      document.getElementById("Db5").setAttribute("style", null);
      playPiano("Db5", volume / 100);
      document
        .getElementById("Db5")
        .setAttribute("style", "background-color: red; padding-top: initial;");
      setTimeout(function () {
        document.getElementById("Db5").setAttribute("style", null);
      }, 500);
      break;
    case "Y":
    case "y":
      document.getElementById("Eb5").setAttribute("style", null);
      playPiano("Eb5", volume / 100);
      document
        .getElementById("Eb5")
        .setAttribute("style", "background-color: red; padding-top: initial;");
      setTimeout(function () {
        document.getElementById("Eb5").setAttribute("style", null);
      }, 500);
      break;
    case "I":
    case "i":
      document.getElementById("Gb5").setAttribute("style", null);
      playPiano("Gb5", volume / 100);
      document
        .getElementById("Gb5")
        .setAttribute("style", "background-color: red; padding-top: initial;");
      setTimeout(function () {
        document.getElementById("Gb5").setAttribute("style", null);
      }, 500);
      break;
    case "O":
    case "o":
      document.getElementById("Ab5").setAttribute("style", null);
      playPiano("Ab5", volume / 100);
      document
        .getElementById("Ab5")
        .setAttribute("style", "background-color: red; padding-top: initial;");
      setTimeout(function () {
        document.getElementById("Ab5").setAttribute("style", null);
      }, 500);
      break;
    default:
      break;
  }
}
