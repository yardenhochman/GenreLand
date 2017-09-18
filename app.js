const express = require('express');
const logger = require('morgan');
const path = require ('path');
const bodyParser = require('body-parser');

const app = express();

app.use(logger('dev'));
app.use(express.static( 'public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});

app.get('/', (req, res) =>{
    res.send('hello world')
});

const eventRoutes = require('./routes/event-routes');
app.use('/event', eventRoutes);

const profileRoutes = require('./routes/profile-routes');
app.use('/profile', profileRoutes);

const resultsRoutes = require('./routes/results-routes');
app.use('results', resultsRoutes)

app.get('*', (req, res) => {
    res.send('404error');
  });