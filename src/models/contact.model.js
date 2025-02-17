import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
//     displayProfile: [{
//         profile: {
//         type: Schema.Types.ObjectId,
//         ref: "Profile"
//     },
//         uploaded: {
//             type: Boolean,
//             default: false
//     },
//  }],
    phoneNumber: {
        type: String,
        required: true,
    },
    user: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }]

}, { timestamps: true });

export const Contact = mongoose.model('Contact', contactSchema);

const contactNotSavedSchema = new Schema({
//     displayProfile: [{
//         profile: {
//         type: Schema.Types.ObjectId,
//         ref: "Profile"
//     },
//         uploaded: {
//             type: Boolean,
//             default: false
//     },
//  }],
    phoneNumber: {
        type: String,
        required: true,
    },
    user: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }]

}, { timestamps: true });

export const ContactNotSaved = mongoose.model('ContactNotSaved', contactNotSavedSchema);