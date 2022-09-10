let soundsDirectory = {
  a : "sounds/tom-1.mp3",
  s : "sounds/tom-2.mp3",
  d : "sounds/tom-3.mp3",
  f : "sounds/tom-4.mp3",
  g : "sounds/snare.mp3",
  h : "sounds/crash.mp3",
  j : "sounds/kick-bass.mp3"
}

for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var audio = new Audio(soundsDirectory[this.innerText]);
    audio.play();
    this.classList.add("pressed");
    setTimeout(function() {
      document.querySelectorAll(".drum")[i].classList.remove("pressed");
    }, 100);
  });
}

document.addEventListener("keydown", function(event) {
  var audio = new Audio(soundsDirectory[event.key]);
  audio.play();
  this.querySelector("." + event.key).classList.add("pressed");
  setTimeout(function() {
    document.querySelector("." + event.key).classList.remove("pressed");
  }, 100);
});
