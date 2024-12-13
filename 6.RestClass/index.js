const exp = require("constants");
const express = require("express");
const app = express();
const { v4: uuidv4 } = require('uuid');
var methodOverride = require('method-override')
app.use(methodOverride('_method'))
const port = 8080;
app.use(express.urlencoded({ extended: true}));
const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname , "views"));
app.use(express.static(path.join(__dirname, "public")));
app.listen(port, ()=>{
    console.log("Your system is running");
})
let posts = [
    {
        Username: "Rahul shukla",
        content: "Hi i got selected for my 1st internship.",
        id: uuidv4()
    },
    {
        Username: "Sandhya",
        content: "let it see.",
           id: uuidv4()
    },
    {
        Username: "Mangl",
        content: "Hi this is my first posts.",
           id: uuidv4()
    },
   
];
app.get("/posts" , (req, res)=>{
    res.render("index.ejs" , {posts});
})
app.get("/posts/new" , (req, res)=>{
    console.log("request accepted");
    res.render("form.ejs");
});
app.get("/posts/:id" , (req, res)=>{
    let {id} =req.params;
    let post = posts.find((p)=> (id) === p.id);
    console.log(post);
    // console.log("request accepted again");
    res.render("show.ejs",{ post });
});
app.post("/posts",(req, res)=>{
    console.log(req.body);
    let{Username , content} = req.body;
    let id = uuidv4();
    console.log(`your username is ${Username} and your content is ${content} and id is ${id}`);
   
    posts.push({Username, content , id });
        // res.send("post accepted");
        res.redirect("/posts");
});
app.patch("/posts/:id" , (req, res)=>{
    let {id} =req.params;
    let post = posts.find((p)=> (id) === p.id);
    let newContent = req.body.content;
    post.content = newContent;
    res.redirect("/posts");
    console.log(post);
})
app.get("/posts/:id/edit",(req, res)=>{
    let {id} =req.params;
    let post = posts.find((p)=> (id) === p.id);
    res.render("edit.ejs",{post});
})
app.delete("/posts/:id",(req, res)=>{
    let {id} = req.params;
    let post = posts.find((p)=> (id) === p.id);
    posts = posts.filter((p)=>id !== p.id);
    res.redirect("/posts");
})