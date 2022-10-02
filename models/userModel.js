import mongoose from "mongoose";
import bcrypt from 'bcrypt';

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: 'Please provide an email'
    },
    hashPassword: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: 'Firstname must be provided'
    },
    lastName: {
        type: String,
        required: 'Lastname must be provided'
    },
    birthday: {
        type: Date
        // required: 'Date of birth required'
    },
    phone: {
        type: String,
        // required: 'Please provide a phone number'
    },
    photo: {
        type: String,
    },
    dateJoined: {
        type: Date,
        default: Date.now,
    },
    userType: {
        type: String,
        default: 'User'
    },
    belt: {
        type: String,
        default: 'White'
    },
    stripes: {
        type: Number,
        default: 0
    },
    waiver: {
        type: Boolean,
        default: false
    },
    membership: {
        type: String,
        default: 'Trial'
    }
});

UserSchema.methods.comparePassword = (password, hashPassword) => {
    try {
        bcrypt.compareSync(password, hashPassword)
    } catch (error) {
        console.log(error)
    };
}

