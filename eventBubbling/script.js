let ul = document.querySelector("ul");
let btn = document.querySelector("button");
let input = document.querySelector("input");


ul.addEventListener("click",function(dets){

    dets.target.classList.toggle("li");
})

btn.addEventListener("click",function(){
    let li = document.createElement("li");
    li.textContent = input.value;
    ul.appendChild(li);

    input.value = "";

})