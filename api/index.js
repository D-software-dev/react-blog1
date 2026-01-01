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
const path = require("path");
const cloudinary = require("cloudinary").v2;

dotenv.config();
cloudinary.config({
  cloud_name: "dgfxxaqcs",
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
// app.use(cors());
app.use(
  cors({
    origin: ["http://localhost:3000", "https://D-software-dev.github.io"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.options("*", cors());
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("Connected to MongoDB"))
  .catch((error) => console.log(error));

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "images");
//   },
//   filename: (req, file, cb) => {
//     // const uniqueName = Date.now() + "-" + Math.round(Math.random() * 1e9);
//     const uniqueName = new Date().getHours() + "-" + file.originalname;
//     cb(null, uniqueName);
//   },
// });

const storage = multer.memoryStorage();

const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("file"), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  // console.log(req.file);

  cloudinary.uploader
    .upload_stream({ resource_type: "auto" }, (error, result) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ error: "Error uploading to Cloudinary" });
      }
      res.json({ public_id: result.public_id, url: result.secure_url });
    })
    .end(req.file.buffer);
  // res.status(200).json("Testing file uploaded");
});

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/posts", postsRoute);
app.use("/api/categories", catsRoute);

app.listen("5000", () => {
  console.log("Server is running on port 5000");
});
