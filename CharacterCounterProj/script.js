let input = document.querySelector("textarea");
let span = document.querySelector("span");


input.addEventListener("input", function () {
    span.textContent = input.value.length
})