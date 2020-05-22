const express = require('express');
const mongoose = require('mongoose');
const shortenerRoutes = require('./routes/shortener');
const userRoutes = require('./routes/user');
const linkRoutes = require('./routes/link');
const passport = require('passport');
require('dotenv').config();

const app = express();

mongoose.connect(process.env.DBCONNECTION, {useNewUrlParser: true, useUnifiedTopology: true})
    .then( () => console.log("Connected to MongoDB"))
    .catch( (err) => console.log(err))

app.use(express.urlencoded({extended: false}));
app.use(express.json());
    
app.use(passport.initialize());
require('./config/passport')(passport);

app.use('/:id', shortenerRoutes);
app.use('/api/users', userRoutes);
app.use('/api/links', linkRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>console.log(`Server listening on port ${PORT}`))