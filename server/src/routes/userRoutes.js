const express = require("express");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const generateToken = require ("../utils");
const expressAsyncHandler = require("express-async-handler")

const userRouter = express.Router();

userRouter.post("/signup", async (req, res) => {
    try {
        // Extract email and password from the req.body object
        const { username, email, password } = req.body;
        
        // Check if the email is already in use
        let userExists = await User.findOne({ email });
        
        if (userExists) {
            res.status(401).json({ message: "Email is already in use." });
            return;
        }
        
        // Define salt rounds
        const saltRounds = 10;
        
        // Hash password
        bcrypt.hash(password, saltRounds, (err, hash) => {
            if (err) throw new Error("Internal Server Error");

            // Create a new user
            let user = new User({
                username,
                email,
                password: hash,
            });

            // Save user to database
            user.save().then(() => {
                res.send( {
                    _id: user._id,
                    username: user.name,
                    email: user.email,
                    token: generateToken(user)
                });
            });
        });
    } 
    catch (err) {
        return res.status(401).send(err.message);
    }
});

userRouter.post(
    "/signin", expressAsyncHandler(async (req,res,next) => {
        // Extract email and password from the req.body object
        const { email, password } = req.body;

        // Check if user exists in database
        let user = await User.findOne({ email });

        if (!user) {
            res.status(401).send({ message: "Invalid Email or Password" });
        }
        else{
            // Compare passwords
            bcrypt.compare(password, user.password, (err, result) => {
                if (result) {
                    res.send( {
                        _id: user._id,
                        username: user.username,
                        email: user.email,
                        token: generateToken(user)
                    })
                    return;
                }
                console.log(err);
                res.status(401).send({ message: "Invalid Credentials" });
            });
        }
    })
);
  
module.exports = {userRouter}