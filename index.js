import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());  // convert json to javascript object
app.use(bodyParser.urlencoded({ extended: true }));

/*
app.get('/:id' , (req , res , next) => {
    console.log(req.params.id);
    res.send("<h1>Hello Brother My name is Sumit </h1>");
});
*/

app.get('/' , (req , res , next) => {
    console.log(req.query);
    console.log(req.params);

    let data = {
        "name" : "Sumit",
        "rollno" : (ru, data)=>{
            console.log("This is name Sumit : : : :: :: :: ### ",ru , data);
        }
    }

    data.rollno("Sumit" , 565);

    res.send("<h1>Hello Brother My name is Sumit </h1>");
});



app.post('/postapi' , (req , res , next) => {
    console.log(req.body);

    let data = JSON.stringify(req.body); // convert javascript object to json

    res.send({sucess : "<h1>Hello Brother I am post api </h1>" , data});
});

app.listen(2000 , ()=>{
    console.log("Server is running...");
});