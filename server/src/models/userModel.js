const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
        username: {
            type: String, 
            required: true,
        },

        email: {
            type: String,
            required: true,
        },

        password: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
    })
     

    module.exports = User = mongoose.model("User", userSchema);
