const randomNumber = Math.floor(Math.random()*100)+1;

let min = 1;
let max = 100;

const submit = document.getElementById("submit");
const result = document.getElementById("result");

submit.onclick = function(){

    let text = document.getElementById("desire").value;
    let guess = Number(text);

    if (guess === randomNumber) {
    result.textContent = "bohottt badhiyaaa!";
    result.style.color = "lime";
}
else if (guess < randomNumber) {
    result.textContent = "arey gadha niche jaa";
    result.style.color = "orange";
}
else {
    result.textContent = "kabhi kuch dhang ka karle upar ja";
    result.style.color = "orange";
}
}