let h2 = document.querySelector("h2");
let btns = document.querySelectorAll(".symb");
let inp ="";

for(btn of btns){
    btn.addEventListener("click", function(){
        console.log(this.textContent); // text content will access the content of given div.
        // let result = this.textContent;
        let result = this.textContent;
     
        if(result === "="){
            inp = eval(inp).toString(); // eval is used to perform the mathematical operation and toString() is used to convert back into string.
            h2.innerHTML = inp;
        }
        else if(result === "del"){
      inp = ' ';
      h2.innerHTML = "0";
        }
        else{
            inp = inp +result;
            h2.innerHTML = inp;
              console.log(inp);
        }
    })
    }
