const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

var corsOptions = {
    origin: 'http://localhost:54908'
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.unsubscribe(bodyParser.urlencoded({ extended: true }));

const db = require('./app/models');

db.sequelize.sync();

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to bezkoder application' });
});

require('./app/routes/tutorial.routes')(app);

const PORT  = process.env.PORT || 54908;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})