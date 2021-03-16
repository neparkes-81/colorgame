var colors = generateColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var modeEasy = false;

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
}

for(var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function() {
        if (this.style.backgroundColor === pickedColor) {
            for(var i = 0; i < squares.length; i++) {
                squares[i].style.backgroundColor = pickedColor;
            }
            message.textContent = "Correct!";
            h1.style.backgroundColor = pickedColor;
            resetBtn.textContent = "Play Again?";
        } else {
            this.style.backgroundColor = "#232323";
            message.textContent = "Wrong!";
        }
    });
}

resetBtn.addEventListener("click", function() {
   if (modeEasy) {
       reset(3); 
   } else {
       reset(6)
   }
        
});

easyBtn.addEventListener("click", function() {
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    reset(3);
    for(var i = 0; i < squares.length; i++) {
        if(!colors[i]) {
            squares[i].style.display = "none";
        }
    }
    modeEasy = true;
})

hardBtn.addEventListener("click", function() {
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    modeEasy = false;
    for(var i = 0; i < squares.length; i++) {
        if(!colors[i]) {
            squares[i].style.display = "block";
        }
    }
    reset(6);
})



function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
function generateColors(num) {
   var randColors = [];
    for(var i=0; i < num; i++) {
        randColors.push(randomColor());
    }
    return randColors;
}
function randomColor() {
    var red = Math.floor(Math.random() * 255);
    var green = Math.floor(Math.random() * 255);
    var blue = Math.floor(Math.random() * 255);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}
function reset(num) {
    colors = generateColors(num);
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetBtn.textContent = "New Colors";
    h1.style.backgroundColor = "steelblue";
    message.textContent = "";
}