// // const express = require('express');
// // const mongoose = require('mongoose');

// // const app = express();
// // const PORT = process.env.PORT || 3000;

// // // mongodb://localhost:27017/mydatabase
// // // Connect to MongoDB
// // mongoose.connect('mongodb://localhost:27017/mydatabase', {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true
// // })
// // .then(() => {
// //   console.log('Connected to MongoDB');
// // })
// // .catch((error) => {
// //   console.error('Error connecting to MongoDB:', error);
// // });

// // // Middleware
// // app.use(express.json());

// // // Routes
// // app.use('/api', require('./routes/allroutes'));

// // // Start the server
// // app.listen(PORT, () => {
// //   console.log(`Server is running on port ${PORT}`);
// // });




// let express = require('express');
// let app = express();+

// app.get('/', function (req, res) {
// res.send("Welcome to Express Routing!!");
// });


// app.get('/test', function (req, res) {
//     res.send(" Reached test route");
// });

// app.get('/gethouse', function (req, res) {
//     res.send("Reached gethouse route");
// });

// app.post('/login', function (req, res) {
//     res.send("Reached login ,post");
// });

// app.post('/signup', function (req, res) {
//     res.send("Reached signup route,post");
// });
    
// app.listen(5000);


// index.js

// Import required modules
const express = require('express');
const mongoose = require('mongoose');

// Create Express app
const app = express();
const PORT = process.env.PORT || 4000;

// Connect to MongoDB Atlas
mongoose.connect("mongodb+srv://<username>:<password>@cluster0.hdp75zb.mongodb.net/workshop?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log("Connected to MongoDB Atlas");
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB Atlas: ", err);
    });

// Define routes
app.get('/', (req, res) => {
    res.send('Welcome to the workshop backend!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
