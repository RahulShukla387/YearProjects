
let user = document.querySelector("#user");
user.addEventListener("input", type );
function type(){
    let h2 = document.querySelector("h2");
    h2.innerText = user.value;
    h2.style.color = "blue";
}