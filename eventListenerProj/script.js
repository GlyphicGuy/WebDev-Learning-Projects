let h1 = document.querySelector("h1")


window.addEventListener("keydown",(det)=>{
    if (det.key === " ") {
        
        h1.textContent = "Space";
    }
    else{

        h1.textContent = det.key;
    }
})