const express = require('express');
const cors = require('cors');

const app = express();

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewars
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

//routes
app.use('/', require('./routes/index'));

//Server listening
app.listen(app.get('port'), () => {
    console.log('Server On Port', app.get('port'));
})