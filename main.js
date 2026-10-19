let buttons = document.getElementsByTagName("button")
for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("mouseover", function(){
        this.style.backgroundColor = "blue"
    })
    buttons[i].addEventListener("mouseleave", function(){
        this.style.backgroundColor = "rgb(13, 136, 230)"
    })
}

let body = document.getElementById("body")
let img = document.getElementById("image")
let headerDiv = document.getElementById("headerDiv")
function ChangeBg(){
    body.style.backgroundColor = "lightblue"
}

function GoodVibes(){
    let motivation = document.createElement("p")
    motivation.textContent = "Be the best version of you!"
    headerDiv.insertBefore(motivation, img)
}

function Time(){
    let timeText = document.createElement("p")
    timeText.textContent = new Date()
    headerDiv.insertBefore(timeText, img)
}

function ChangePic(){
    img.src = "Skärmbild 2026-09-21 134433.png"
}

function HidePic(){
    img.style.display = "none"
}

function ShowPic(){
    img.style.display = "inline"
}

headerDiv.style.display = "flex"
headerDiv.style.flexDirection = "column"
function Header(){
    headerDiv.style.position = "static"
    headerDiv.style.backgroundColor = "lightgray"
    headerDiv.style.justifyContent = "center"
    headerDiv.style.alignItems = "center"
    body.style.flexDirection = "column"
    // body.style.alignItems = "center"
}

function RemoveHeader(){
    headerDiv.style.display = "none"
}

function ShowHeader(){
    headerDiv.style.display = "flex"
}