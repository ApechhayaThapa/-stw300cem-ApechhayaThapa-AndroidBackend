const path = require("path");
const multer = require("multer");
const client = require("../knexfile");
const knex = require("knex")(client);

const storage = multer.diskStorage({
  destination: "./uploads/user",
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  }
});

const upload = multer({ storage }).single("profileImage");

const uploadProfileImage = (req, res) => {
  upload(req, res, err => {
    if (err) {
      res.json({ status: false, message: err.message });
    } else {
      res.json({
        status: true,
        message: "Profile Image Updated.",
        data: req.file.filename
      });
    }
  });
};

function register(req, res) {
  const fullName = req.body.fullName;
  const email = req.body.email;
  const password = req.body.password;
  const phone = req.body.phone;
  const address = req.body.address;
  const profileImage = req.body.profileImage;
  const userType = req.body.userType;

  knex("user")
    .insert({
      fullName,
      password,
      email,
      phone,
      address,
      profileImage,
      userType
    })
    .then(() => res.json({ status: true, message: "Register Success." }))
    .catch(err => res.json({ status: false, message: err.message }));
}


module.exports = {
  uploadProfileImage,
  register,
  login,
  getUserById,
  changeProfileImage
};
