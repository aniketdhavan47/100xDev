const express=require("express");

const bodyParser=require('body-parser');

const app=express();

app.use(bodyParser.json());

const port=3000;

app.use((req,res,next)=>{
    console.log("Inside Middleware!")
    next();
})

app.get('/',(req,res)=>{
    res.send("Hello")
})

// query paramters

app.post('/queryData',(req,res)=>{
        let value=req.query.value;
        console.log("Value from Query Paramters :"+value);
        res.send("Value is :"+value);
})

app.post('/headersData',(req,res)=>{
    let value=req.headers.value;
    console.log("Value from header :"+value);
    res.send("Value is: "+value);
})

// Body data
app.post('/bodyData',(req,res)=>{
    let value=req.body.value;
    console.log("Value from body data :"+value);
    res.send("Value is:"+value);
})


app.listen(port,()=>{
    console.log(`App listening on port ${port}`);
})