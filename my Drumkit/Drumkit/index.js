
document.addEventListener("DOMContentLoaded", function() {
    let drumButtons = document.querySelectorAll(".drum");
  
    drumButtons.forEach(function(button) {
      button.addEventListener("click", function() {
        let buttonInnerHTML = this.innerHTML;
        displayLetter(buttonInnerHTML); 
        makeSound(buttonInnerHTML);
      });
    });
  
    document.addEventListener("keydown", function(event) {
      displayLetter(event.key); 
      makeSound(event.key);
    });
  
    function makeSound(key) {
      switch (key) {
        case "w":
          playSound("tom-1.mp3");
          break;
        case "a":
          playSound("tom-2.mp3");
          break;
        case "s":
          playSound("tom-3.mp3");
          break;
        case "d":
          playSound("tom-4.mp3");
          break;
        case "j":
          playSound("crash.mp3");
          break;
        case "k":
          playSound("kick-bass.mp3");
          break;
        case "l":
          playSound("snare.mp3");
          break;
        default:
          console.log("Invalid key.");
      }
    }
  
    function playSound(soundName) {
      let audio = new Audio("./sounds/" + soundName);
      audio.play();
    }
  
    function displayLetter(letter) {
      let clickedLetterElement = document.getElementById("clicked-letter");
      clickedLetterElement.innerText = "Clicked: " + letter;
      clickedLetterElement.style.fontSize = "2em"; 
    }
  });


