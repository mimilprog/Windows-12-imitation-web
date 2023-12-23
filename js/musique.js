var PlMB = document.getElementById("PlMB")
var PaMB = document.getElementById("PaMB")
var Ambient = document.getElementById("Ambient")
function PlayM(){
    PaMB.style.display = "none"
    PlMB.style.display = "flex"
    PaMB.style.display = "flex"
    PlMB.style.display = "none"
    Ambient.play()
}
function PauseM(){
    PlMB.style.display = "none"
    PaMB.style.display = "flex"
    PlMB.style.display = "flex"
    PaMB.style.display = "none"
    Ambient.pause()
}