const express = require("express");
const BookRouter = require("./routes/BookRouter");

const app = express();

//Middleware
app.use(express.json());
app.use("/books", BookRouter);

//listen 3000 
app.listen(3000, () => console.log("Listening on 3000"));