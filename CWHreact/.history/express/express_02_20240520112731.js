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

app.post('/teas',(req,res)=>{
    const {name,price} = req.body
    const newTea = {id:nextId++,name,price}
    teaData.push(newTea)
    res.status(201).send(newTea)
})
app.get('/teas',(req,res)=>{
    res.status(200).send(teaData);
});


app.get('/teas/:id',(req,res)=>{
    const tea = teaData.find(t =>t.id === parseInt(req.params.id))

    if(!tea){
        return res.status(404).send
    }
})
app.listen(port,() =>{
    console.log(`Server is running at port : ${port}....`);
})