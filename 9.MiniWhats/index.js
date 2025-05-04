const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const chat = require("./models/chat.js");
const methodoverride = require("method-override");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
const mongoose = require("mongoose");
const exp = require("constants");
app.use(methodoverride("_method"));
main().then(()=>{
    console.log("connection succesfull");
})
.catch((err)=>{
    console.log(err);
})
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}
// let chat1 = new chat({
//     from: "Neha",
//     to: "Priya",
//     msg: "send me your exam sheets",
//     created_at: new Date(),
// })
// chat1.save().then((res)=>{
//     console.log(res);
// });
app.get("/chats", async (req, res)=>{
    let chats =  await chat.find(); // Used to print all the data of chat.js
    res.render("index.ejs", {chats});
    // console.log(chats);
});
app.get("/",(req, res)=>{
    res.send("Geting your response");
});
app.get("/chats/new",(req, res)=>{
    res.render("add.ejs");
})
app.post("/chats",(req,res)=>{
    let {from , to , msg} = req.body;
    let newchat = new chat({
       from: from, 
       to: to,
       msg: msg,
       created_at: new Date(), 
    });
    console.log(newchat);
    newchat.save()
    .then((res)=>{
        console.log(res)
       })
       .catch((err)=>{
        console.log(err);
       });
    res.redirect("/chats");
   
})
app.get("/chats/:id/edit",async (req, res)=>{
    let {id} = req.params;
     let result = await chat.findById(id);
    res.render("edit.ejs",{result});
});
//update Route
app.put("/chat/:id",async (req, res)=>{
    let{id} = req.params;
    let {msg: newMsg} = req.body;
    let uchat = await chat.findByIdAndUpdate(id, {msg: newMsg},{runValidators: true, new: true});
    // console.log(uchat);
    res.redirect("/chats");

})
//Deleting post
app.delete("/chat/:id",async (req, res)=>{
    let {id} = req.params;
    let dchat = await chat.findByIdAndDelete(id);
    console.log(dchat);
    res.redirect("/chats")
   
})
app.listen(port, ()=>{
    console.log("Server is working properly");
});