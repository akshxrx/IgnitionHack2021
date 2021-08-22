  function play(soundName){
    let sound = new Audio("../IgnitionHack2021/mainPage/" + soundName + ".mp3");
    sound.play();
    sound.volume = 0.2;
  }
  
  function pause(soundName){
    let sound = new Audio("../IgnitionHack2021/mainPage/" + soundName + ".mp3");
    sound.onpause();
    sound.currentTime=0;
  }

  function sadge() {
    if (!document.getElementById("checkbox").checked) {
        alert("Please check few boxes for the best result");
    }
    else
    {
        // window.open("sadge.html", "_blank");
        window.location.href = "sadge.html";
    }
  }

  function sadge() {
    if (!document.getElementById("checkbox").checked) {
        alert("Please check few boxes for the best result");
    }
    else
    {
        // window.open("https://www.youtube.com/watch?v=XZeqK7IMrXU", "_blank");
        // window.location.href = "";
        window.location.href = "sadge.html";

    }
  }