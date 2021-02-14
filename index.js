


var buttonList = document.querySelectorAll(".drum");

for(var i = 0; i < buttonList.length; i++){
  buttonList[i].addEventListener("click", handleClick);
}

function handleClick(){
  var audio = new Audio('sounds/tom-3.mp3');
  audio.play();

}
