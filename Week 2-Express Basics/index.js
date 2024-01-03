
const express=require("express");

// const express = require('express');
const bodyParser=require('body-parser')


const app=express();

app.use(bodyParser.json());

const port=4000;

// MiddleWare

function MiddleWare(req,res,next){
    console.log("From MiddleWare :"+req.headers.counter);
    next();
}
 
// app.use(MiddleWare);

// Get Method 

app.get('/sum',(req,res)=>{
    let num1=Number(req.query.num1);
    let num2=Number(req.query.num2);
    let answer=num1+num2;
    res.send(`Answer is ${answer}`);
});

//Post Method

function createUser(req,res){
    res.send("hii");
    console.log("creating User");
}
app.post('/createUser',createUser);

// put method
function updateDetails(req,res){
    res.send("details updated");
}

app.put("/updateDetails",updateDetails);


//delete Method

function deleteData(req,res){
    res.send("data Deleted");
}


app.delete("/deleteData",deleteData);

// Headers

app.post('/headerData',(req,res)=>{
    let value=req.headers.counter;
    res.send(value);
    console.log(req.headers);
})

// BodyData

app.post('/body',(req,res)=>{
    let name=req.body.name;
    let age=req.body.age;
    let city =req.body.city;
    console.log("User details are : Name :"+name+" age:"+age+" city:"+city);
    res.send("Body data Read Successfully");
})

                    // Response from server


// Status code

app.post('/calculateSum',(req,res)=>{
    let value=req.body.value;
    if(value<10000){
        res.send("calculating sum.....");
    }else{
        res.status(411).send("Can not calculate the sum...");
    }
})


// Response Body


// Object response
app.post('/objectResponse',(req,res)=>{
    let responseObject={
        "code":101,
        "values":"val"
    }
    res.sendFile(index);
})

// HTMl response

app.get('/htmlResponse',(req,res)=>{
    res.sendFile(__dirname + "/index.html");
})

// Fetch

app.get('/fetchRequest',(req,res)=>{
    let counter=req.query.counter;
    let obj={
        "counter":counter,
        "sum":10,
        "mul":20
    }
    res.send(obj);
})


app.listen(port,()=>{
    console.log(`App listening on port ${port}`);
});


