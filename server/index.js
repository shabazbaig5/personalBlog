const express = require('express');
const router = require('./routes/router.js');
const app = express();
const PORT = process.env.PORT||4004;

app.use(express.static('public'));
app.use('/', router());


app.set('view engine', 'ejs');  //setting up view engine to be used
app.set('views',__dirname + '/views');  //setting up path to find the views in

app.listen(PORT, () => {

    console.log('listening to port ' + PORT);

});