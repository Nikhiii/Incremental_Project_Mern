const express=require('express')
const mongoose = require("mongoose");
const port = 8080;
const cors = require("cors");
const tableModel = require("./models/table");
var Cronjob = require("cron").CronJob;
const app = express();


const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.get("/", (req, res) => {
  res.json({ message: "Hello, World!" });
});

app.use(cors(corsOptions)); // Use this after the variable declaration

const dbUrl =
  "mongodb+srv://abhishek:abhishek03@democluster.9m513.mongodb.net/iamneoFoodApp?retryWrites=true&w=majority";
mongoose.connect(
  dbUrl,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (!err) {
      console.log("DB connected Successfully");
    } else {
      console.log("DB not connected");
    }
  }
);

//cors level middleware
app.use(cors());

const userRoutes = require("./routes/users");
const menuRoutes = require("./routes/menu");

//body parser middleware
app.use(express.urlencoded({ extended: true }));

//json middleware
app.use(express.json());

//router level middleware function
app.use("/user", userRoutes);
app.use("/restaurant", menuRoutes);

app.get("/error", (req, res) => {
  res.status(500).send("something went wrong");
});

const server = app.listen(port, () => {
  console.log(`the server is listening on port ${port}`);
});

module.exports = { app, server }; // Export the app for testing
