import express from "express"
import bodyParser from "body-parser"

const port=3000;
const app=express();

app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }));

var toDoList=[];

app.get("/",(req,res)=>{
    res.render("index.ejs")
})

app.post("/submit",(req,res)=>{
    var todo=req.body.todo;
    toDoList.push(todo);
    res.render("index.ejs",{
        toDoList:toDoList
    })
})

app.listen(port,()=>{
    console.log("Server is running on ",port);
})