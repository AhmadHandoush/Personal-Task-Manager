// const User = require("../models/user.model");

// const register = async (req, res) => {
//   //   try {
//   //     const user = await User.findOne({ name });
//   //     if (user) return res.status(500).send("Username already exists!");

//   //     const createdUser = await User.create(req.body);
//   //     return res.status(201).json({ user: createdUser });
//   //   } catch (error) {
//   //     console.log(error);
//   //     return res.send(500).send("Internal server error!");
//   //   }
//   User.create(req.body)
//     .then((users) => res.json(users))
//     .catch((err) => res.json(err));
// };
