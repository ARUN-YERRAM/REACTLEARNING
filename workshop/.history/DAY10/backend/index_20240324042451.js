let express = require('express');
let app = express();
let allroutes = require('./routes/AllRoutes');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require("dotenv");
dotenv.config();
app.use(express.json());


let corspolicy = {
    origin:"http://localhost:3000"
}
app.use(cors(corspolicy));

app.use((req,res,next) => {
    console.log(" Request received at " + (new Date()));
    next();
});

allroutes.get('/',(req,res) => {
    console.log(" reached root");
    res.send("Welcome to realgrande back end server");
});
// connect to the database
// schema
// model
// from middleware, using model to get data from DB


// connect
let db = async () => { 
    try{ 
        console.log(process.env.DBURI);
        await mongoose.connect(process.env.DBURI);
        console.log(" connected to database");
    }
    catch(err) {
        console.log(' error connecting');
    }
}
db();



app.use('/api',allroutes);

// connect to the database
// schema
// model
// from middleware, use model to get data from DB



// app.get('/',(req,res) => {
//         console.log(" reached root");
//         res.send("Welcome to realgrande back end server");
//     });
app.listen(5000,()=>{ console.log("Backend server listening at port 5000")});