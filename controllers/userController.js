import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { UserSchema } from '../models/userModel.js'

const User = mongoose.model('User', UserSchema)

export const newUser = (req, res) => {
    const newUser = new User(req.body);
    newUser.hashPassword = bcrypt.hashSync(req.body.password, 10);

    newUser.save((err, user) => {
        if (err) {
            res.status(500).json('Message: ' + err.message)
            console.log(err.message)
        } else {
            res.status(200).json('User created with ID: ' + user._id)
        }
    })
}

export const getUsers = (req, res) => {
    User.find((err, users) => {
        if (err) {
            res.status(500).json('Message: ' + err.message)
            console.log(err.message)
        } else {
            res.status(200).json(users)
        }
    })
}

export const updateUser = (req, res) => {
    let user = req.body
    console.log(user.userId)
    
    User.findByIdAndUpdate(
        user.userId, 
        {
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            birthday: user.birthday,
            phone: user.phone,
            photo: user.photo,
            userType: user.userType,
            belt: user.belt,
            stripes: user.stripes,
            waiver: user.waiver,
            membership: user.membership
        }, 
        (err, user) => {
        if (err) {
            res.status(500).json('Error')
        } else {
            res.status(200).json(user)
            console.log(user)
        }
    })
}

export const deleteUser = (req, res) => {
    
}

export const login = (req, res) => {
    // check if data base contains provided email

    // check password match

    // store in session

    // store in local storage
}

export const logout = (req, res) => {

}

export const countUsers = (req, res) => {

}