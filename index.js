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

//API User
app.post("/user/upload", userHandler.uploadProfileImage);
app.post("/user/register", userHandler.register);
app.post("/user/login", userHandler.login);
app.get("/user/:id", userHandler.getUserById);
app.put("/user/upload/change/:id", userHandler.changeProfileImage);




app.listen(3000, () => console.log("Server running on port 3000"));
