
// h1.innerText = `rgb(${red},${green}, ${blue})`;

let btn = document.querySelector("button");
function Random(){
let red =Math.floor((Math.random()*240)+1);
let green =Math.floor((Math.random()*240)+1);
let blue =Math.floor((Math.random()*240)+1);
let color = `rgb(${red}, ${green}, ${blue})`;
return color;
// console.log(color);
}
btn.addEventListener("click", function(){
    let h1 = document.querySelector("h1");
    let clr = Random();
    h1.innerText = clr;
    let box = document.querySelector(".color");
    box.style.backgroundColor = clr;
})


