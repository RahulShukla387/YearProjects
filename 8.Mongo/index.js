const mongoose = require('mongoose');

main().then(()=>{
console.log("connection successful");
})
.catch((err) => {
    console.log(err)
});
// making function asynchronous
// async function main(){
//     // await mongoose.connect('mongodb://127.0.0.1:27017/test');
// }
// const userSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     age: Number,
// });
// const User = mongoose.model("User", userSchema);
// const user1 = new User({name: "RahulShukla", email: "rahul@gmail.com", age: 20});
// const user2 = new User({name: "Priya Malhotra", email: "priya@gmail.com", age: 19});
// user1.save();
// user2.save();
// User.insertMany([
//     {name: "Rahul shukla", age: 20, email: "rahul@gmail.com"},
//     {name: "Ragini", age: 18, email: "ragini@gmail.com"},
//     {name: "Sabnam", age: 19, email: "sabnam@gmail.com"},
// ]).then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });
// User.find({age: {$gt: 18}}).then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/Amazon');  
}

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true, // same as not null of sql condition
    },
    author: {
        type: String,
        maxLength: 20,
    },
    Price: {
        type: Number,
        min: 2
    },
    category: {
        type: String,
        enum: ["fictious", "non fictious"],
    }
})
const book = mongoose.model("book", bookSchema);
book.findByIdAndUpdate("676d70be0bfed47fa44eeb87" ,{author: "Ragini Mishra"}).then((res)=>{
    console.log(res);
})
// const book1 = new book()
// const book2 = new book ({title: "Try to be better", author: "Rahul Shukla", Price: 500 })
// book2.save();
// book.insertMany([{title: "Something above the love", author: "Rahul shukla ji", category: "fictious"}]);
// book.findByIdAndDelete('676d8f4417a7b9b08ecd1816')
// .then((res)=>{
//     console.log(res);
// })