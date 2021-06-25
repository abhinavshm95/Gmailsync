const express = require('express');
const app = express();
const port = 80;

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/gmail', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("we are connected bro")
});

const Gmailschema = new mongoose.Schema({
    email: String,
    password: String
});

var Kitten = mongoose.model('yashkitty', Gmailschema);

var yashkitty = new Kitten({ email: 'yashjangid@123gmail.com', password: '12345' });

yashkitty.save(function(err, harrykitty) {
    if (err) return console.error(err);
});


app.get('/', (req, res) => {

    res.status(200).send('hello from simple server :)')

})
app.get('/about', (req, res) => {

    res.status(200).send('hello you are in about page')

})


app.listen(port, () => {
    console.log(`You are listning this page on port no ${port}`)
})