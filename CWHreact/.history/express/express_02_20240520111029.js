import express from 'express'

const app = express();

const port = 3000;

// app.get("/",(req,res)=>{
//     res.send("Hello World from Arun !!!!!!!!!");
// })


// app.get("/twitter",(req,res)=>{
//     res.send("Hello World!");
// })




// app.get("/ice",(req,res)=>{
//     res.send("Hello World from !!!!!!!!!");
// })


app.use(express.json());

let teaData = []
let nextId = 1

app.post('/teas')
app.listen(port,() =>{
    console.log(`Server is running at port : ${port}....`);
})