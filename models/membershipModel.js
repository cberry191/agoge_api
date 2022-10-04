import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const membershipSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: "Membership Name must be provided"
    },
    cost: {
        type: Number,
        required: "Membership cost must be provided"
    },
    daysRecurring: {
        type: Number,
        required: "Membership recurring time period required."
    },
    expiryDate: {
        type: Date
    }
})