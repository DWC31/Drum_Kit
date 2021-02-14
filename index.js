


var buttonList = document.querySelectorAll(".drum");

for(var i = 0; i < buttonList.length; i++){
  buttonList[i].addEventListener("click", handleClick);
}

function handleClick(){
  alert("I got clicked!");
}
