const mongoose = require("mongoose")

const MessageSchema = new mongoose.Schema({
    authorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    message: String,
    reactions: [{
        emoji: String,
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    }],
    isReplyTo: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message"
    }, 
    timeStamp: {
        type: Date,
        default: Date.now
    }
});

const Message = mongoose.model("Message", MessageSchema);
module.exports = Message;