const express = require('express');
const mongoose = require('mongoose');
// const session = require('express-session')
const Link = require('./models/Link')
const linkRoutes = require('./routes/links');
const userRoutes = require('./routes/users');

require('dotenv').config();
// require('./config/passport')(passport);    

mongoose.connect(process.env.DBCONNECTION, {useNewUrlParser: true, useUnifiedTopology: true})
    .then( () => console.log("Connected to MongoDB"))
    .catch( (err) => console.log(err))

const app = express();

// app.use(session({
//     secret: process.env.SECRET,
//     resave: false,
//     saveUninitialized: false
// }))


app.use(express.urlencoded({extended: false}));
app.use(express.json());

// app.use(passport.initialize());
// app.use(passport.session())

app.use('/api/users', userRoutes);
app.use('/api/links', linkRoutes);

//@route GET /api/links
//@desc open link
//@access public
app.get('/:short', (req, res) => {
    Link.findOne({short: req.params.short})
    .then(({full, click}) => {
        res.redirect(full);
        //need to PUT the add of click
        const prevClick = click;
        const newClick = [...prevClick, {date: Date.now()}];
        Link.findOneAndUpdate({_id: req.params.id}, {click: newClick}, {useFindAndModify: false})
        .then( link => res.json(link))
        .catch( err => res.status(404).json(err));
    })
    .catch(err => res.status(404).json(err))
});

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build')); 
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }

module.exports = app;