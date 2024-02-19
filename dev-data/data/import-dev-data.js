const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Tour = require("../../models/tourModel");
const User = require("../../models/userModel");
const Review = require("../../models/reviewModel");

dotenv.config({ path: "../../config.env" });

const { DATABASE, DATABASE_PASSWORD, DATABASE_NAME } = process.env;
const DB_URI = `mongodb+srv://${DATABASE}:${DATABASE_PASSWORD}@cluster0.guofsiq.mongodb.net/${DATABASE_NAME}`;

mongoose
  .connect(DB_URI, {})
  .then(() => {
    console.log("Veritabanına başarıyla bağlandı!");
  })
  .catch((err) => {
    console.error("Veritabanına bağlanırken bir hata oluştu:", err.message);
    process.exit(1);
  });

const tours = JSON.parse(fs.readFileSync(`${__dirname}/tours.json`, "utf-8"));
const users = JSON.parse(fs.readFileSync(`${__dirname}/users.json`, "utf-8"));
const reviews = JSON.parse(fs.readFileSync(`${__dirname}/reviews.json`, "utf-8"));

const importData = async () => {
  try {
    await Tour.create(tours);
    await User.create(users, { validateBeforeSave: false });
    await Review.create(reviews);
    console.log("Data loaded successfully!");
  } catch (err) {
    console.error("An error occurred while loading data:", err);
  }
  process.exit();
};

const deleteData = async () => {
  try {
    await Tour.deleteMany();
    await User.deleteMany();
    await Review.deleteMany();
    console.log("Data deleted successfully!");
  } catch (err) {
    console.error("An error occurred while deleting data:", err);
  }
  process.exit();
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}

console.log(process.argv);
