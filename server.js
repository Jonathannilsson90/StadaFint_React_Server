require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());

const userRoutes = require("./routes/userRoutes");
app.use("/user", userRoutes);

const bookingRoutes = require("./routes/bookingRoutes");
app.use("/booking", bookingRoutes);

mongoose.set("strictQuery", false);
mongoose.connect(process.env.DB_URL, () =>
  console.log("Server is now connected to monogoDB")
);

app.listen(PORT, () => {
  console.log(`Server is now running on port ${PORT}`);
});
