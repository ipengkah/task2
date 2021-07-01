const { Console } = require("console");
const express = require("express");
const app = express();
require('dotenv/config')
const bodyParser = require('body-parser')
const userRoutes = require('./routes/user')


//app.use(bodyParser())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/userData/create', userRoutes)
app.use('/userData/readbyaccountnumber', userRoutes)
app.use('/userData/readbyidentityNumber', userRoutes)
app.use('/userData/update', userRoutes)
app.use('/userData/delete', userRoutes)

const mongose = require("mongoose");
mongose.connect(process.env.DB_CONNECTION, 
    { useNewUrlParser: true, useUnifiedTopology: true} );
let db = mongose.connection

db.on('error', console.error.bind(console,'Database Connect Error!'))
db.once('open',() => {
    console.log('Database Is Connected')
})


app.post("/users", (req, res) => {

})

app.listen(process.env.PORT, () =>  {
    console.log(`UP AND RUNNING ! ===  ${process.env.PORT}`);
})

