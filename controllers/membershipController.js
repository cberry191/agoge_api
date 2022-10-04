import mongoose from "mongoose";
import {membershipSchema} from "../models/membershipModel.js"

const Membership = mongoose.model('Membership', membershipSchema)

export const newMembership = (req, res) => {
    const newMembership = new Membership(req.body);

    newMembership.save((err, membership) => {
        if (err) {
            res.status(500).json('Message: ' + err.message)
        } else {
            res.status(200).json('Membership: ' + membership.name + ' created.')
        }
    })
}

export const getMemberships = (req, res) => {
    Membership.find((err, memberships) => {
        if (err) {
            res.status(500).json('Message: ' + err.message)
        } else {
            res.status(200).json(memberships)
        }
    })
}

export const updateMembership = (req, res) => {
    
}

export const deleteMembership = (req, res) => {
    
}