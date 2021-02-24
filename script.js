// Clears the screen on click of C button.
function clearScreen() {
  document.getElementById("result").value = "";
}
// Displays entered value on screen.
function liveScreen(value) {
  document.getElementById("result").value += value;
}
// Swaps the style sheet in order to  achieve dark mode.
function switchTheme() {
  let darkMode = document.getElementById("dark-mode");
  let theme = document.getElementById("theme");
  if (theme.getAttribute("href") == "light.css") {
    theme.href = "dark.css";
    darkMode.innerHTML = "Light Mode 🌞";
  } else {
    theme.href = "light.css";
    darkMode.innerHTML = "Dark Mode 🌙";
  }
}
// Create audio if you on click = button.
function test(){
  let audio = document.createElement('audio');
  audio.setAttribute("autoplay","true");
  audio.innerHTML = "<source src=\"audio/Sound_1.mp3\" type=\"audio/mpeg\">";
  document.body.appendChild(audio);
}
