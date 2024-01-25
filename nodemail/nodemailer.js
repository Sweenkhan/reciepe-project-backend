// import nodemailer from "nodemailer"

// // Create a Nodemailer transporter using SMTP details
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'your-email@gmail.com',
//     pass: 'your-email-password',
//   },
// });

// // Function to send an email
// const sendEmail = async (formData) => {
//   const mailOptions = {
//     from: 'your-email@gmail.com',
//     to: 'recipient-email@example.com',
//     subject: 'New Contact Form Submission',
//     html: `
//       <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
//       <p><strong>Email:</strong> ${formData.email}</p>
//       <p><strong>Phone:</strong> ${formData.phone}</p>
//       <p><strong>Message:</strong> ${formData.message}</p>
//     `,
//     attachments: [
//       {
//         filename: formData.file.originalname,
//         content: formData.file.buffer,
//       },
//     ],
//   };

//   try {
//     const info = await transporter.sendMail(mailOptions);
//     console.log('Email sent: ', info.response);
//     return true;
//   } catch (error) {
//     console.error('Error sending email: ', error);
//     return false;
//   }
// };

//  export default sendEmail;
