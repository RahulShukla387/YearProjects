const mongoose = require("mongoose");
main()
.then(() =>{
    console.log("connection Success")
})
.catch((err) =>{ 
console.log(err);
});
async function main() {
   await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp"); 
}
const chat = require("./models/chat.js");
// let allchat =[{
//     from: "Neha",
//     to: "Priya",
//     msg: "send me your exam sheets",
//     created_at: new Date(),
// },
// {from: "ghanshyam",
//     to: "Rahul",
//     msg: "Hi bro how are you",
//     created_at: new Date(),

// },
// {from: "ghni",
//     to: "chul",
//     msg: "Hey you",
//     created_at: new Date(),

// },
// {from: "priyanshu",
//     to: "Muntu",
//     msg: "how are you",
//     created_at: new Date(),

// },
// {from: "abdul",
//     to: "sabnam",
//     msg: "Hi sis how are you",
//     created_at: new Date(),

// },
// {from: "Pinku",
//     to: "sabnam",
//     msg: "Hi babs",
//     created_at: new Date(),

// },
// ]
// chat.insertMany(allchat);
