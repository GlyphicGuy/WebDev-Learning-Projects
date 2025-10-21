let btn = document.querySelector("#btn");
let image = document.querySelector("#image-preview");
let fileinp = document.querySelector("#fileinp");

btn.addEventListener("click",function (dets){
    console.log(dets)
    fileinp.click();
})

fileinp.addEventListener("change",function(dets){
    console.log(dets);
    let file = dets.target.files[0]
    if (file) {
        btn.textContent = file.name
         
        image.setAttribute("src", URL.createObjectURL(file));
        image.style.display = 'block';
    }
})