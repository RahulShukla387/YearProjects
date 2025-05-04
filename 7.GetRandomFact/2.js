let url = "https://dog.ceo/api/breeds/image/random";
async function Image(){
let response = await fetch(url);
let result= await response.json();
let data = await result.message;
return data;
}

let img = document.querySelector("img");
let btn = document.querySelector("button");

btn.addEventListener("click" ,async () =>{
    let link = await Image();
    img.setAttribute("src" , link);
    console.log(link);
} )