const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const port = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    console.log("hello");
    res.send("hello");
})

// Log in Sign Up
let users = [];
app.post('/signup', (req, res) => {
    let user = req.body;

    let userAlreadyexist=false;

    for(let i=0;i<users.length;i++){
        if(users[i].username==user.username){
            userAlreadyexist=true;
            break
        }
    }
    if(userAlreadyexist){
        res.status(400).send("User Already present");
        console.log("user Already present")
    }else{
    users.push(user);
    res.status(200).send("User registraion complete");
    }

})

// log in

app.post('/login',(req,res)=>{
        let val=req.body;
        for(let i=0;i<users.length;i++){
            if(users[i].username==val.username && 
                users[i].password==val.password){
                    res.status(200).send("Log in Successful");
                }else{
                    res.status(401).send("Unauthorized");
                }
        }
})


// Get data

app.get('/data',(req,res)=>{
    let val=req.body;
    let userfound=[];
    
    for(let i=0;i<users.length;i++){
        if(users[i].username==val.username && 
            users[i].password==val.password){
                userfound.push({
                   "username":val.username,
                   "password":val.password
                })
            }
    }
    res.json(userfound);
})


app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})

