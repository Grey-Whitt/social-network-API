const { Schema, model, Types } = require('mongoose');

const UserSchema = new Schema (
    {
        username: {
            type: String,
            required: 'You must provide a username',
            trim: true,
            unique: true
        },
        email: {
            type: String,
            required: 'You must provide a valid email address',
            trim: true,
            unique: true,
            //use regex to check that the provided email is valid
            validate: function(email) {
                return /^[a-zA-Z0-9.!#$%&’*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
            }          
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    {
        //model settings
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

//virtual that will show how many friends a user has
UserSchema.virtual('friendCount').get(function () {
    return this.friends.length
})

const User = model('User', UserSchema)

module.exports = User