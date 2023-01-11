const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors);
app.use(express.json());

const port = 3000;

//Connection DB
const conn = require("./db/conn");
conn();

//Routes
const routes = require("./routes/router")

app.use('/api', routes)

app.listen(port, () =>{
    console.log("Service Online")
});