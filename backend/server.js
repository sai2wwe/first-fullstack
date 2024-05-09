require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const libraryRouter = require('./routes/library');
const userRouter = require('./routes/users');
const App = express();

App.use(cors({origin: 'http://localhost:5173'}));
App.use(express.json());
App.use((req, res, next) => {
    console.log(req.method, req.path);
    next();
});


App.use('/api/books', libraryRouter);
App.use('/api/users', userRouter);
mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            App.listen(process.env.PORT, () => {
                console.log(`Server is running on port ${process.env.PORT}`);
            });
        })
        .catch((err) => {
            console.log(err);
        })
