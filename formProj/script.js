let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");
let main = document.querySelector(".main");

form.addEventListener("submit",function(dets){
    dets.preventDefault();
    inputs.forEach(element => {
        console.log(element.value)
    });


let card = document.createElement("div");
card.classList.add("card");

let pf = document.createElement("div");
pf.classList.add("pf");


let img = document.createElement("img");
img.src = inputs[0].value;

let h3 = document.createElement("h3");
h3.textContent = inputs[1].value;

let h4 = document.createElement("h4");
h4.textContent = inputs[2].value;

let h5 = document.createElement("h5");
h5.textContent = inputs[3].value;

pf.appendChild(img);
card.appendChild(pf);
card.appendChild(h3);
card.appendChild(h4);
card.appendChild(h5);

main.appendChild(card);

inputs.forEach(element => {
    if (element.value !== "Submit") {
        element.value = ""
    }
});
})



