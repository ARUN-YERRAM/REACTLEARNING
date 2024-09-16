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


// add a new tea
app.post('/teas',(req,res)=>{
    const {name,price} = req.body
    const newTea = {id:nextId++,name,price}
    teaData.push(newTea)
    res.status(201).send(newTea)
})

// get all tea
app.get('/teas',(req,res)=>{
    res.status(200).send(teaData);
});


// get a tea with id

app.get('/teas/:id',(req,res)=>{
    const tea = teaData.find(t =>t.id === parseInt(req.params.id))

    if(!tea){
        return res.status(404).send('Tea not found')
    }
    res.status(200).send(tea)
})

// upadate tea

app.put('/teas/:id',(req,res)=>{
    // const teaId = req.params.id
    const tea = teaData.find(t=>t.id === parseInt(req.params.id))

    if(!tea){
        return res.status(404).send('Tea not found')
    }
    const {name,price} = req.body
    tea.price = priceres.send(200)
})

app.listen(port,() =>{
    console.log(`Server is running at port : ${port}....`);
})