var buttonList = document.querySelectorAll(".drum");

for (var i = 0; i < buttonList.length; i++) {
  buttonList[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    handleClick(buttonInnerHTML);
    animateButton(buttonInnerHTML);
  });
}

document.addEventListener("keydown", function() {
  var pressed = event.key;
  handleClick(pressed);
  animateButton(pressed);
});

function handleClick(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;
    default:
      console.log(buttonInnerHTML);

  }

}

function animateButton (currentKey){
  var activeButton =  document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    removePressed(activeButton);
  }, 100);

}

function removePressed(activeButton){
  activeButton.classList.remove("pressed");
}
