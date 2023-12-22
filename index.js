const express = require("express");

const PORT = 8000;

const app = express();


// connect the mongo db with url.
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://talibffdc:m0zPY8s4qV0yPhrQ@cluster0.yxg365m.mongodb.net/test");
  

app.listen(PORT, async () => {
  console.log(`server up on port ${PORT}`);
});

const router = require("./router");

const cors = require("cors");

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(router);
