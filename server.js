const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const session = require('express-session');
const app = express();
mongoose.connect("mongodb+srv://akash:akash1234@cluster0.4ayge.mongodb.net/bookmytaxi?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("database connected successfully");
}).catch(err => {
    if (err) console.log(err);
})
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.static('./public'))
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: "secreat",
    resave: true,
    saveUninitialized: false
}))
app.get('/', (req, res) => {
    res.render('Home')
})
app.use('/pationt', require('./route/pationt'))
app.use('/hospital', require('./route/hospital'))

const port = process.env.PORT || 4000;

app.listen(port, (err) => {
    if (err) console.log(err);
    else console.log("server is listen on port 4000");
})