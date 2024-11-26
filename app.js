const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const pageRouter = require('./router/pageRouter');
const userRouter = require('./router/userRouter');
const conn = require('./db')();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/', pageRouter);
app.use('/user', userRouter)

app.listen(process.env.PORT || 5000, ()=> {
    console.log("http://localhost:3000/ portu çalıştırıldı");
})