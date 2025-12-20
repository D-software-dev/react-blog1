const express = require("express");
const cors = require("cors");
const app = express();
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const postsRoute = require("./routes/posts");
const catsRoute = require("./routes/categories");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const multer = require("multer");

dotenv.config();
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("Connected to MongoDB"))
  .catch((error) => console.log(error));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, "guy-studying2.jpg");
  },
});

const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/posts", postsRoute);
app.use("/api/categories", catsRoute);

app.listen("5000", () => {
  console.log("Server is running on port 5000");
});
