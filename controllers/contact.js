const Contact = require("../models/contact");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const { StatusCodes } = require("http-status-codes");

const contact = async (req, res) => {
    const {name, email, subject, message} = req.body
    console.log(req.body)
  
  ///const contact = await Contact.create({...req.body });
 

  var transporter = nodemailer.createTransport({
    service: process.env.E_NEWSERVER,
    // port: 587,
    // secure: false, // true for port 465, false for other ports
    auth: {
      user: process.env.NEW_E,
      pass: process.env.NEW_P,
    },
  });
  const mailOptions1 = {
    from: process.env.NEW_E,
    to: process.env.NEW_E,
    subject: `New Message from ${name}` ,
  
    html: `
    
<body style="background-color: rgba(253, 222, 232, 0.048); width: 100%;" >
    <div  style=" display: flex; flex-direction: column; height: 100%; padding-bottom: 4em; 
    margin-top: 70px !important; font-family:Verdana, Geneva, Tahoma, sans-serif;
    background-color: #ffffff; width: 90%; margin: auto; position: relative; text-align:center; 
    font-size: 1.5em; word-wrap: break-word; border-radius: 20px; box-shadow: 4px 4px 2px rgba(44, 44, 44, 0.144);">
        <h4 style="text-align: center; color: rgb(0, 0, 0); font-size: 2em;  ">New Message</h4>
        <p style="
             border-radius: 10px; padding: 10px;  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0); width: 90%; 
             margin: auto; margin-bottom: 4px; background-color: white;">Sender:
            <span style="color: rgb(55, 33, 248); font-weight: 900;" >${name}</span> </p>
        <p  style=" margin-bottom: 4px !important;
        border-radius: 10px; padding: 10px;  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0); width: 90%; 
        margin: auto; background-color: white;">Email: <span> ${email}</span></p>
         <p  style=" margin-bottom: 4px !important;
         border-radius: 10px; padding: 10px;  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0); width: 90%; 
         margin: auto; background-color: white;">Subject: <span>${subject}</span></p>
         <p  style=" margin-bottom: 4 !important;
         border-radius: 10px; padding: 10px;  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0); width: 90%; 
         margin: auto; background-color: white;"> Message: <span style=" color: rgba(128, 128, 128, 0.678);">${message} </span> 
        </p>
    </div>
      
    `,
  };

  const mailOptions2 = {
    from: process.env.NEW_E,
    to: email,
    subject: `Your Message ${name}` ,
    
    html: `
    <div  style="  height: 100%; padding: .5em .5em 4em .5em; border-radius:10px;
    margin-top: 70px !important;
    background-color: #ffffff; width: 100%; margin: auto; position: relative; text-align:left; 
    font-size: 1.5em; word-wrap: break-word;">

        <h4 style="text-align: center; color: rgb(255, 255, 255); font-size: 2em;  ">Message Recieved</h4>
        <p style="
             border-radius: 10px; padding: 10px;   width: 90%; 
             margin: auto; margin-bottom: 4px; background-color: white;">Hi,
            <span style="font-weight: 900;" > ${name}!
            </span> 
            <br>
            This is to notify you that your message was recieved.. <br>
            You will hear from me soon. <br>
            Thank you for your feedback. 
            <br>
            <br>

            Best regards,
            -Gion
            </p>
     
    </div>

      
    `,
  };

   transporter.sendMail(mailOptions1, function (error, body) {
    if (error) {
      return res.json({ error: error });
    }
  });

  transporter.sendMail(mailOptions2, function (error, body) {
    if (error) {
      return res.json({ error: error });
    }
    // res.send({contact})
    res.json({
      message: "Email Sent!"
        
    });
  });
};

module.exports = { contact };
