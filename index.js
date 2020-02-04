const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const userHandler = require("./handler/user-handler");
const foodHandler = require("./handler/food-handler");
const orderHandler = require("./handler/order-handler");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname + "/uploads"));
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(3000, () => console.log("Server running on port 3000"));
