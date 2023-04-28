console.log("loaded successfully!");

// Define the elements for each button
let w = document.getElementById("w");
let a = document.getElementById("a");
let s = document.getElementById("s");
let d = document.getElementById("d");
let j = document.querySelector(".j");
let k = document.querySelector(".k");
let l = document.querySelector(".l");

// Add click event listeners for each button
w.addEventListener("click", function() { playSound('crash.mp3', w); });
a.addEventListener("click", function() { playSound('kick-bass.mp3', a); });
s.addEventListener("click", function() { playSound('tom-1.mp3', s); });
d.addEventListener("click", function() { playSound('tom-2.mp3', d); });
j.addEventListener("click", function() { playSound('tom-3.mp3', j); });
k.addEventListener("click", function() { playSound('crash.mp3', k); });
l.addEventListener("click", function() { playSound('kick-bass.mp3', l); });

// Add keydown event listeners for each key
document.addEventListener("keydown", function(event) {
  if (event.key === 'w') {
    playSound('crash.mp3', w);
  } else if (event.key === 'a') {
    playSound('kick-bass.mp3', a);
  } else if (event.key === 's') {
    playSound('tom-1.mp3', s);
  } else if (event.key === 'd') {
    playSound('tom-2.mp3', d);
  } else if (event.key === 'j') {
    playSound('tom-3.mp3', j);
  } else if (event.key === 'k') {
    playSound('crash.mp3', k);
  } else if (event.key === 'l') {
    playSound('kick-bass.mp3', l);
  }
});

// Play a sound and add the 'pressed' class to the element
function playSound(soundFile, element) {
  let audio = new Audio(soundFile);
  audio.play();
  element.classList.add('pressed');
  setTimeout(function() { element.classList.remove('pressed'); }, 100);
}
