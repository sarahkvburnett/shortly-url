require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

//db connection
mongoose.connect(process.env.DBCONNECTION, {useNewUrlParser: true, useUnifiedTopology: true})
    .then( () => console.log("Connected to MongoDB"))
    .catch( (err) => console.log(err))

// encoding
app.use(express.urlencoded({extended: false}));
app.use(express.json()); 

//client
app.use(express.static('./client/build/')); 

// routes 
app.use('/api/users', require('./routes/users'));
app.use('/api/links', require('./routes/links'));

app.get('/:short', (req, res) => {
  Link.findOne({short: req.params.short})
  .then( link  => {
      let { click } = link;
      click.push({date: Date.now()});
      link.save({click})
      .then( ({full}) => res.redirect(full))
      .catch( err => res.status(500).json(err))
  })
  .catch(err => res.sendFile(path.join(__dirname+'/client/build/index.html')))
});

app.listen(PORT, ()=>console.log(`Server listening on port ${PORT}`))

