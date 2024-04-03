const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Enable CORS

// Route to handle sending email
app.post('/api/send-email', (req, res) => {
    const { name, email, message } = req.body;
  
    // Create a nodemailer transporter
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'patilsejal8088@gmail.com', // Enter your Gmail email address
        pass: 'SejalPatil8088' // Enter your Gmail password
      }
    });
  
    // Email message
    let mailOptions = {
      from: 'patilsejal8088@gmail.com',
      to: 'sejal.1@pw.live', // Enter the recipient email address
      subject: 'New Message from Portfolio Contact Form',
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `
    };
  
    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Error sending email');
      } else {
        console.log('Email sent:', info.response);
        res.status(200).send('Email sent successfully');
      }
    });
  });
  
  // Start server
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
