const express = require("express");
const cors = require("cors");
const multer = require("multer");
const app = express();
app.use(express.static("public"));
app.use(express.json());
app.use(cors());

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./public/images/");
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });
  
const upload = multer({ storage: storage });

let cars = [
  {
    _id: 1,
    brand: "Ford",
    model: "Mustang",
    year: 2025,
    price: "$32,000",
    type: "Sports Car",
    main_image: "images/mustang.jpg",
  },
  {
    _id: 2,
    brand: "Ford",
    model: "F-150",
    year: 2025,
    price: "$38,000",
    type: "Pickup Truck",
    main_image: "images/f150.jpg",
  },
  {
    _id: 3,
    brand: "Chevrolet",
    model: "Corvette",
    year: 2025,
    price: "$68,000",
    type: "Sports Car",
    main_image: "images/corvette.jpeg",
  },
  {
    _id: 4,
    brand: "Chevrolet",
    model: "Camaro",
    year: 2025,
    price: "$32,000",
    type: "Sports Car",
    main_image: "images/camaro.jpg",
  },
  {
    _id: 5,
    brand: "Dodge",
    model: "Charger",
    year: 2025,
    price: "$60,000",
    type: "Muscle Car",
    main_image: "images/charger.jpg",
  },
  {
    _id: 6,
    brand: "Dodge",
    model: "Durango",
    year: 2025,
    price: "$42,000",
    type: "SUV",
    main_image: "images/durango.jpg",
  },
  {
    _id: 7,
    brand: "Mercedes-Benz",
    model: "C-Class",
    year: 2025,
    price: "$48,000",
    type: "Sedan",
    main_image: "images/cclass.jpg",
  },
  {
    _id: 8,
    brand: "Mercedes-Benz",
    model: "G-Class",
    year: 2025,
    price: "$149,000",
    type: "SUV",
    main_image: "images/gclass.jpg",
  },
];

app.get("/api/cars", (req, res) => {
    res.send(cars);
});

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});