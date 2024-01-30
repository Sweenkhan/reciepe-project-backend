import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
        firstName: {
            type: String,
            required: [true, "first name is required"],
        }, 
        lastName: {
            type: String,
            required: [true, "last name is required"]
        }, 
        email: {
            type: String,
            required: [true, "email is required"],
            unique: true,
            validate: {
                validator: (value) => /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value),
                message: "Invalid Email format"
            }
        },
         phone: {
            type: String,
            required: [true, "phone number is required"],
            unique: true,
            validate: {
                validator: (value) => /^\d{10}$/.test(value),
                message: "Invalid phone number format"
            }
        },
         message: {
            type: String,
            required: [true, "message is required."]
        } 
})

const contact = mongoose.model("Contact", contactSchema)

export default contact