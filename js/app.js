// eyes
let pupil = document.querySelector(".pupil")
let spot = document.querySelector(".dark-spot")


// controls
let up = document.querySelector(".up")
let down = document.querySelector(".down")
let left = document.querySelector(".Left")
let right = document.querySelector(".right");
let reset = document.querySelector(".reset");

pupil.style.transition = "all .1s ease";

up.onclick = (e)=>{
    pupil.style.top = "-20px"
    pupil.style.top = "-20px"
    spot.style.top = "-5px"
    if(spot.style.top = 0){
        spot.style.top = "10px"
        spot.style.left = "10px"
    }
}

down.onclick = (e)=>{
    pupil.style.top = "25px"
    spot.style.top = "10px"
}


left.onclick = (e)=>{
    pupil.style.left = "-85px"
    pupil.style.top = "-5px"
    spot.style.left = "-5px"
    spot.style.top = "0"
}

right.onclick = (e)=>{
    pupil.style.left = "80px"
    spot.style.left = "10px"
}

reset.onclick = (e)=>{
    pupil.style = ""
    spot.style = ""
}