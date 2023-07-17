// Passing a function as an input w/o a () instead it's just a name 
// document.querySelector("button").addEventListener("click", handleClick);


// Another way to passing through an anonymous function
var buttonArray = document.querySelectorAll(".drum");
console.log(buttonArray);
buttonArray.forEach((Element) => {
    console.log(Element)
    Element.addEventListener("click", () => {
        let buttonLetter = Element.innerHTML;
        playSound(buttonLetter);
        buttonAnimation(buttonLetter);
    })
})

document.addEventListener("keydown", (e) => {
    playSound(e.key);
    buttonAnimation(e.key);
})


function playSound(key) {    
    switch (key) {
        case "w":
            console.log(key);
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            console.log(key);
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            console.log(key);
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play()
            break;
        case "d":
            console.log(key);
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play()
            break;
        case "j":
            console.log(key);
            var crash = new Audio("sounds/crash.mp3");
            crash.play()
            break;
        case "k":
            console.log(key);
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play()
            break;
        case "l":
            console.log(key);
            var snare = new Audio("sounds/snare.mp3");
            snare.play()
            break;
        default:
            console.log(key);
            break;
    }
}

function buttonAnimation(key) {
    let activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed")
    setTimeout(() => {
        activeButton.classList.remove("pressed")
    }, 100)
    console.log(activeButton);
}
