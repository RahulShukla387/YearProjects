let userSeq = [];
let gameSeq = [];
let level = 0;
let started = false;
let hScore =0;
let colors = ["div1", "div2", "div3", "div4"];
let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");
document.addEventListener("keydown" ,function (){
    if(started == false){
        h2.innerText = `Game start you are at the level ${level +1}`;
        started = true;
        console.log("Your Game started");
        levelup();
    }
   else{
    levelup();
   }  
} )
function levelup(){
    userSeq = [];
    level++;
    if(hScore <= level){
        hScore++;
h3.innerText = `Your highest score is ${(hScore-1)*3}`;
    }
    let randIdx = Math.floor(Math.random()*4);
    let randColor = colors[randIdx];
    let randBtn = document.querySelector(`#${randColor}`);
    let gameColor = randBtn.getAttribute("id");
   h2.innerText = ` level ${level}`;
   gameSeq.push(gameColor);
    console.log(gameSeq);
    btnFlash(randBtn);
}
function btnFlash(btn){
    btn.classList.add("btnFlash");
    setTimeout(function(){
        btn.classList.remove("btnFlash");
    },500);
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },500);
}
function checkAnswer(idx){
    // console.log(`current level ${level}`)
    if(gameSeq[idx] == userSeq[idx]){  // have a doubt ehy to use idx in gameSeq[idx];
        if(userSeq.length == gameSeq.length){
            setTimeout(levelup,1000);
        }
// console.log("same value");
    }
    else {
        h2.innerHTML =`Game Over Your score is ${(level -1)*3} <br>! Press any key to start.`;
        
          
        // document.querySelector("body").style.backgroundColor = "red";
        // setTimeout(function(){
        //     document.querySelector("body").style.backgroundColor = "white";
        // },100);
        reset();
       
    }
}
function btnPress(){
   let clkBtn= this;
   userFlash(clkBtn);
   let userColor = clkBtn.getAttribute("id");
   userSeq.push(userColor);
//    console.log(userSeq);
   checkAnswer(userSeq.length-1);
}
let btnAll = document.querySelectorAll(".btn");
for(x of btnAll){
    x.addEventListener ("click" , btnPress);
}
function reset (){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
// let score = `${(gameSeq.length)*3}`;
// h3.innerHTML = `Your highest score is ${score}`;


