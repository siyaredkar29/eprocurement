const cors = require("cors")
const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./Routes/userRoutes");
const app = express();
const tenderRoutes = require('./Routes/tenderRoutes');
const verifyJWT = require("./middleware/jwtAuth");
require("dotenv").config();

//MIDDLEWARE
app.use(cors());
app.use(express.json());



app.use("/users", userRoutes);
app.use("/tenders",tenderRoutes);
try {
  mongoose.connect(process.env.DB_URL).then(() => {
    console.log("successfulyy connected");
    app.listen(process.env.PORT, () => {
      console.log("hosted");
    });
  });
} catch (error) {
  console.log(error);
}