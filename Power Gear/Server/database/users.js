const db = require("./config");
const bcrypt = require('bcrypt');



module.exports = {
  getAllUsers: async (req, res) => {
    try {
      const users = await db.User.findAll(); 
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).send("Error fetching users");
    }
  },
  
  getOneUser: async (req, res) => {
    const userId = req.params.userid;
    try {
      const user = await db.User.findByPk(userId);
      if (!user) {
        return res.status(404).send("User not found");
      }
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).send("Error fetching user");
    }
  }
  ,
  addUser: async (req, res) => {
    const newUser = req.body;
    try {
      const hash = await bcrypt.hash(newUser.password, 10);
      newUser.password = hash;
      const user = await db.User.create(newUser); 
      res
        .status(201)
        .send({ message: "User created successfully", userId: user.id });
    } catch (error) {
      console.error(error);
      res.status(500).send("Error adding user");
    }
  },
  
  updateUser: async (req, res) => {
    const userId = req.params.userid;
    const updatedUserData = req.body;
    try {
      const user = await db.User.findByPk(userId);
      if (!user) {
        return res.status(404).send("User not found");
      }
      const hash = await bcrypt.hash(updatedUserData.password, 10);
      updatedUserData.password = hash;
      const updatedUser = await user.update(updatedUserData);
      res.json(updatedUser);
    } catch (error) {
      console.error(error);
      res.status(500).send("Error updating user");
    }
  },
  deleteUser : async (req, res) => {
    const userId = req.params.userId;
    try {
      const user = await db.User.findByPk(userId);
      if (!user) {
        return res.status(404).send("User not found");
      }
      await user.destroy(); 
      res.status(204).send();
    } catch (error) {
      console.error(error);
      res.status(500).send("Error deleting user");
    }
  },
  
};