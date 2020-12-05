const { Schema, model, Types } = require('mongoose');
var dateFormat = require("dateformat");

const ReactionSchema = new Schema(
    {
        //adding a custom id here, this helps identify the reactions id
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal, 'mm/dd/yyyy')
        }
    },
    {
        //model settings
        toJSON: {
            getters: true
        },
        id: false,
        _id: false

    }
)

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal, 'mm/dd/yyyy')
        },
        username: {
            type: String,
            required: true
        },
        reactions: [ReactionSchema]
    },
    {
        //model settings
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
)

//a virtual that will show the amount of reactions a thought has
ThoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema)

module.exports = Thought;