let thunder = new Audio("../IgnitionHack2021/hoppy/sound/thunder.mp3"); 
thunder.loop = true;

let city = new Audio("../IgnitionHack2021/hoppy/sound/city.mp3"); 
city.loop = true;

let ocean = new Audio("../IgnitionHack2021/hoppy/sound/ocean.mp3"); 
ocean.loop = true;

let birds = new Audio("../IgnitionHack2021/hoppy/sound/birds.mp3"); 
birds.loop = true;

function playth(sound, name){
    if (!sound.paused) {
        sound.pause();
        sound.currentTime = 0;
        sound.volume = 0.4;
        document.querySelector(name).style.boxShadow = "0px 0px 0px #539464";

    }
     else 
     {
        sound.play();
        document.querySelector(name).style.boxShadow = "0px 12px 12px #539464";
     }
  }

  function play(sound, name){
    if (!sound.paused) {
        sound.pause();
        sound.currentTime = 0;
        sound.volume = 1;
        document.querySelector(name).style.boxShadow = "0px 0px 0px #539464";
    }
     else 
     {
        sound.play();
        document.querySelector(name).style.boxShadow = "0px 12px 12px #539464";
     }
  }
  