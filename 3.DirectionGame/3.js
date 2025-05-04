let inp = document.querySelector("input");
function move(event){
console.log(`You click ${event.code}`);
if(event.code=="ArrowDown"){
    alert("You are moving down the screen");
}
else if(event.code=="ArrowUp"){
    alert("You are moving Up the screen");
}
else if(event.code=="ArrowLeft"){
    alert("You are moving Left the screen");
}
if(event.code=="ArrowRight"){
    alert("You are moving Right the screen");
}
}
inp.addEventListener("keydown",move);


