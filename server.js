const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const htmlRoute = require('./routes/htmlRoutes');
const notesRoute = require('./routes/noteRoutes');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/api', notesRoute);
app.use('/', htmlRoute);

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});


