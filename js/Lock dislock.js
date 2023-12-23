function lockScreen(){
    //var écran1 = document.querySelector(.écran1)
    //var écran2 = document.querySelector(.écran2)
     const écran1 = document.getElementById("écran1")
     const écran2 = document.getElementById("écran2")
     écran2.classList.add("écran2revel")
     écran2.classList.remove("écran2")
     écran1.classList.add("écran1revel")
     écran1.classList.remove("écran1")
 }