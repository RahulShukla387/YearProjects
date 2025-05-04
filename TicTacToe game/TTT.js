
let h1 = document.querySelector("h1");
//todo Selecting the button

let btns = document.querySelectorAll(".box");
let count =0;
let Player1 = [];
let Player2 = [];
let gameSeq = [["a1" , "a2" , "a3"],["a1", "a5", "a9"], ["a1", "a4", "a7"], ["a7", "a8", "a9"], ["a7", "a5", "a3"], ["a4", "a5", "a6"], ["a2", "a5", "a8"], ["a3", "a6", "a9"]]
btns.forEach((btn)=>{
    btn.addEventListener("click", (data)=>{
        count++;
        if(count %2 != 0){
            btn.innerHTML = "X"
            Player1.push(btn.id);
        }
        else{
            btn.innerHTML = "0"
            Player2.push(btn.id);
        }
        let result1 = gameSeq.some((target)=>{
         return target.every((data)=>{
          return   Player1.includes(data);
          })  
        })
        if(result1){
            h1.innerHTML = "congratulation Player of value X is winner";
            console.log("win");
            return;
        }
        let result2 = gameSeq.some((target)=>{
         return target.every((data)=>{
          return   Player2.includes(data);
          })  
        })
        if(result2){
            h1.innerHTML = "congratulation Player of value 0 is winner"
            return;
        }
        //for draw condition 
        if((Player1.length || Player2.length ) == 5){
            h1.innerHTML = "Game Draw Play again";
            return;
        }
    })
})