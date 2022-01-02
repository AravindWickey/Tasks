const express = require("express");
const app = express();
const sql = require('./shared/connect')
var studentRouter = require('./routes/studentRoutes');
var mentorRouter = require('./routes/mentorRoutes');


app.use(express.json());

sql.connect();

app.use('/student', studentRouter);
app.use('/mentor', mentorRouter);

app.listen(3000);


