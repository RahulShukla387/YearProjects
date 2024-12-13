
let submit = document.querySelector("#submit");

submit.addEventListener("click",addTask);
function addTask(){
    let h2 = document.querySelector("h2");
    let add = document.querySelector("#task");
    let lists = document.querySelector("ul")
   let li = document.createElement("li");
      //  h2.innerText = add.value;
      li.innerText= add.value;
      lists.appendChild(li);
      let btn = document.createElement("button");
      btn.innerText = "delete";
      btn.classList.add("delete");
      li.append(btn);
add.value = "";
}
// let btn = document.querySelector(".delete");
lists = document.querySelector("ul");
lists.addEventListener("click", dltTask);
function dltTask(event){
  console.log(event.target);
  console.log("your task is deleted");
  console.log(event.target.nodeName);
  if(event.target.nodeName == "BUTTON"){
    let par = event.target.parentElement;
    console.log(par);
    par.remove();
  }
  
}
