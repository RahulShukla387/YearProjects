let url = "https://catfact.ninja/fact";
async function fact(){
    try{
// fetch(url)
// .then((resp)=>{
// resp.json().then((data)=>{
//     console.log ((data.fact));
// })
// })
let response = await fetch(url);
let data = await response.json();
return data.fact;
    }
    catch(e){
        console.log("sorry fact are not found try later");
        return "Error: Unable to fetch fact."
    }
}
// fact();

btn = document.querySelector("button");
btn.addEventListener("click", async ()=>{
    let p =document.createElement("p");
    let div = document.querySelector("div");
    div.append(p);

    let catfact = await fact();
    p.innerText = catfact;
})