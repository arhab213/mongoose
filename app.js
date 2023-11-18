const express = require("express");
const mongoose = require("mongoose");
const menuRoutes = require("./routes/menuRoutes");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/krusty-krab", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Use menu routes
app.use("/", menuRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
