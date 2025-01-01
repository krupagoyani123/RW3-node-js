
const userModel = require("../models/userModel");
const jwt = require('jsonwebtoken')

const viewUser = async (req, res) => {
  try {
    let userDetails = await userModel.find({});
    return res.status(200).send({
      success: true,
      message: "userDetails showed successfully",
      userDetails,
    });
  } catch (err) {
    return res.status(400).send({
      success: false,
      message: "Error View user Details !!!",
    });
  }
};

const addUser = async (req, res) => {
  try {
    const { name, email, password, city, phone ,role} = req.body;

    let dup = await userModel.findOne({ email: email });
    if (dup) {
      return res.status(400).send({
        message: "User already exists",
      });
    } else {
      if (!name || !email || !password || !city || !phone || !role) {
        return res.status(400).send({
          success: false,
          message: "All Fields Required",
        });
      } else {
        let userDetails = await userModel.create({
          name: name,
          email: email,
          password: password,
          city: city,
          phone:phone,
          role:role
        });
        return res.status(200).send({
          success: true,
          message: "User inserted Successfully",
          userDetails,
        });
      }
    }
    let token = await jwt.sign({ user: user }, "krupa", { expiresIn: "2hr" });
    return res.status(200).send({
      success: true,
      token: token,
    });
  } catch (err) {
    return res.status(400).send({
      success: false,
      message: "Error in Add User",
    });
  }
}

const deleteUser = async (req, res) => {
  try {
    let id = req.query.id;
    let deleteUser = await userModel.findByIdAndDelete(id);
    if (delUser) {
      return res.status(200).send({
        success: true,
        message: "User deleted successfully",
        deleteUser,
      });
    } else {
      return res.status(400).sen({
        success: false,
        message: "User not found",
      });
    }
  } catch (err) {
    return res.status(400).send({
      success: false,
      message: "Error in Delete User",
    });
  }
};

const updateUser = async (req, res) => {
  try {
    let id = req.query.id;
    const { name, email, password, city, phone ,role } = req.body;
    if (!name || !email || !password || !city || !phone || !role) {
      return res.status(400).send({
        success: false,
        message: "All Fields Required",
    });
    } else {
      let upUser = await userModel.findByIdAndUpdate(id, req.body);
      if (upUser) {
        return res.status(200).send({
          success: true,
          message: "user Updated Successfully",
          upUser,
        });
      } else {
        return res.status(400).send({
          success: false,
          message: "User not found",
        });
      }
    }
  } catch (err) {
    return res.status(400).send({
      success: false,
      message: "Error in Update User",
    });
  }
};

const loginUser = async (req,res) => {
  try {
      const {email,password} = req.body;
      if (!email || !password) {
          return res.status(500).send({
              success : false,
              message : "All Filed Required",
          });
      }
      let user = await userModel.findOne({email : email});
      if(!user || user.password != password){
          return res.status(500).send({
              success : false,
              message : "Enter valid email And password",
          });
      }
      let token = await jwt.sign({paylod:user} , 'krupa' , {expiresIn:"2hr"})
      return res.status(200).send({
          success : true,
          token : token
      })
  } catch (err) {
      return res.status(501).send({
          success:false,
          message:err
      })
  }
}

module.exports = {
  addUser,
  loginUser,
  viewUser,
  deleteUser,
  updateUser
};
