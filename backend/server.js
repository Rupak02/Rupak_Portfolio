const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const User = require("./models/User");
const nodemailer = require("nodemailer");

dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connected");
  })
  .catch(() => {
    console.log("Failed to connect to DB");
  });

  console.log(process.env.MONGO_URI)

app.post("/api/contactDetails", async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "rupaknbr1@gmail.com",
      pass: "pomj biqz xvwx zlvg",
    },
  });
  const mailOptions = {
    from: email,
    to: "rupaknbr1@gmail.com",
    subject: "New Contact Form Submission from your Portfolio",
    text: `Name: ${req.body.name}\nEmail: ${req.body.email}\nMessage: ${req.body.message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email Sent Successfully: " + info.response);
    }
  });

  try {
    const newUser = new User({ name, email, message });
    await newUser.save();
    res.status(200).json({ message: "Message received and saved to database" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to save message" });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
