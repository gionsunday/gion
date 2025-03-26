require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const User = require('../models/users')

const user = async (req, res) =>{
    console.log(req.body)
    const {name, email} = req.body
     try {
       const newuser = await User.create({...req.body})
       res.json({message:"New User", newuser})
     } catch (error) {
        console.log(error)
     }
    
    
    
  

}

module.exports = {user}