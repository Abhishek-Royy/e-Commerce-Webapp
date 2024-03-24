require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

const Product = require("./schema/schema");

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Wellcome to Backend");
});

// Database Connection eith MongoDB
mongoose.connect(
  "mongodb+srv://abhishek699roy:ecommerce@cluster0.nka4xur.mongodb.net/e-commerce"
);

// API creation

// Image storage engine
const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.filename}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });

//Creating upload endpoint
app.use("/images", express.static("upload/images"));
app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${PORT}/images/${req.file.filename}`,
  });
});

// Schema related
//API for addProducts...
app.post("/addProduct", async (req, res) => {
  const product = new Product({
    id: req.body.id,
    name: req.body.name,
    image: req.body.image,
    category: req.body.category,
    price: req.body.price,
  });
  console.log(product);
  await product.save();
  console.log("Product Saved");
  res.json({
    success: true,
    name: req.body.name,
  });
});

//API for removeProducts...
app.post("/removeProduct", async (req, res) => {
  await Product.findOneAndDelete({ id: req.body.id });
  console.log("Product Removed");

  res.json({
    success: true,
    msg: "Product removed successfully",
    name: req.body.name,
  });
});

//API for get allProducts
app.get("/allProducts", async (req, res) => {
  let products = await Product.find({});
  console.log("All products fetched");
  res.send(products);
});

app.listen(PORT, () => {
  console.log(`Server run at http://localhost:${PORT}`);
});
