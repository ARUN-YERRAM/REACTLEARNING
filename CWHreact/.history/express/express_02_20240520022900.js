import express from 'express'

const app = express();

const port = 3000;

app.get("/",(req,res)=>{
    res
})

app.listen(port,() =>{
    console.log(`Server is running at port : ${port}....`);
})