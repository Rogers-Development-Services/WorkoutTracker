const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public")); // This allows assets to be imported 
app.use(express.static("public/views")); // This imports the views/html 

require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);

// --- Use the following for Local Storage in MongoDB

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutDB", { useNewUrlParser: true });

// --- Use for MongoDB Atlas Storage

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/workoutsDB',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});