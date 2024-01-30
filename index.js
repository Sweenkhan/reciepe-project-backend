import express from "express";
import connection from "./db/connection.js";
import cors from "cors";
import reciepeRoute from "./routes/reciepeRoute.js";
import nodemailer from "nodemailer"; 



const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:5173" }));

app.use(reciepeRoute);

app.get("/", async (req, res) => {
  // res.status(200).sendFile(__dirname + "main.js")
});

 

app.post("/contact", async(req, res) => {
    const formData = req.body;

  // // Create a Nodemailer transporter using SMTP details
  const transporter = nodemailer.createTransport({
    service: "gmail",
        auth: {
      user: "khansween@gmail.com",
      pass: "ykfzkxevhwhwmmql",
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
        return true
    }
    return true;
  } catch (error) {
    console.error("Error sending email: ", error);
    return false;
  }
  res.send({ status: 200, message: "everything is done!" });
});



connection.then(() => {
  app.listen(8000, () => {
    console.log("server is running on port 8000");
  });
});
