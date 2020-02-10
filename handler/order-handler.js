const client = require("../knexfile");
const knex = require("knex")(client);

function addOrder(req, res) {
  const foodID = req.body.foodID;
  const userID = req.body.userID;
  const foodName = req.body.foodName;
  const foodImage = req.body.foodImage;
  const quantity = req.body.quantity;
  const isDelivered = req.body.isDelivered;

  knex("order")
    .insert({ foodID, foodName, foodImage, userID, quantity, isDelivered })
    .then(() => res.json({ status: true, message: "Order Added!!!" }))
    .catch(err => res.json({ status: false, message: err.message }));
}



  knex("order")
    .update({ foodID, foodName, foodImage, userID, quantity, isDelivered })
    .where({ id })
    .then(() => res.json({ status: true, message: "Order Updated!!!" }))
    .catch(err => res.json({ status: false, message: err.message }));
}

module.exports = {
  addOrder,
  getOrder,
  getOrderByUser,
  updateOrder,
  deleteOrder
};
