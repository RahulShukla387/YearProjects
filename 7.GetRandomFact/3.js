// let url = "http://universities.hipolabs.com/search?name="
// let country = "India"

// fetch(url+country)
// .then((Response)=>{
//     console.log(Response);
//     Response.json().then((data)=>{
//         console.log(data);
//     })
// })

let url = "http://universities.hipolabs.com/search?name=";
let country = "India";

fetch(url + country)
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then((data) => {
        console.log(data); // Logs the university data for "India"
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });
