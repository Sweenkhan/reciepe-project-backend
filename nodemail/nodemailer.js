import nodemailer from "nodemailer"; 
import contact from "../models/contactFormSchema.js";
import { config } from "dotenv";
config()


const creatNodeMail = async(req, res) => {
    const formData = req.body;

    const email = formData.email
    const found = await contact.findOne({email})

    if(!found){
        const {firstName, lastName, email, phone, message} = formData;

        const custmerContact = new contact({
            firstName, lastName, email, phone, message
        })

        const savedContact = await custmerContact.save()
        console.log(savedContact)
    } 
  // // Create a Nodemailer transporter using SMTP details
  const transporter = nodemailer.createTransport({
    service: "gmail",
        auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.USER_PASSWORD,
    },
  });

  const mailOptions = {
      from: 'khansween@gmail.com',
    to: "kbhai1585@gmail.com",
    subject: "New Contact Form Submission",
    html: `
      <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Phone:</strong> ${formData.phone}</p>
      <p><strong>Message:</strong> ${formData.message}</p>
    `,
  };


  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: ", info.response);

    if(info){
        const mailOptions2 = {
            from: 'khansween@gmail.com',
            to: formData.email,
            subject: "Thank You for Contacting Reciepe-Maker", 
               html: `
            <p>Dear <strong>${formData.firstName} ${formData.lastName}</strong>,</p>
            <p>Thank you for reaching out to us! We appreciate the time you took to fill out the contact form on our website. Your inquiry is important to us, and we are committed to addressing it as quickly as possible.</p>

           <p> Our team is currently reviewing your message, and we will get back to you shortly. In the meantime, if your matter is urgent, please feel free to contact us directly at <strong>khansween@gmail.com</strong>.
            
            We strive to provide excellent service and look forward to assisting you with [briefly mention the nature of their inquiry].</p>
           `
        }

        const info2 = await transporter.sendMail(mailOptions2);
        console.log("Email sent: ", info2.response);
        res.send({ status: 200, message: "everything is done!" });
        return true
    }
    res.send({ status: 200, message: "We got your message. We will reach you as soon as we." });
    return true;
  } catch (error) {
    console.error("Error sending email: ", error);
    res.send({ status: 201, message: "Rewrite the form filled." });

    return false;
  }
};


export default creatNodeMail;