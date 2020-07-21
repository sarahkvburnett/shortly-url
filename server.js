require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;
// const Link = require('./models/Link')

//db connection
mongoose.connect(process.env.DBCONNECTION, {useNewUrlParser: true, useUnifiedTopology: true})
    .then( () => console.log("Connected to MongoDB"))
    .catch( (err) => console.log(err))

// encoding
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// routes 
app.use('/api/users', require('./routes/users'));
app.use('/api/links', require('./routes/links'));
app.use('/', require('./routes/link'));

// serve react app in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build')); 
    app.get('/*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }

app.listen(PORT, ()=>console.log(`Server listening on port ${PORT}`))

