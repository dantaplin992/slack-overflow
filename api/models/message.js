const mongoose = require("mongoose")

const MessageSchema = new mongoose.Schema({
    authorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    message: String,
    reactions: [],
    isReplyTo: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message"
    }, 
    timeStamp: {
        type: Date,
        default: Date.now
    },
    roomName: String,
});

const Message = mongoose.model("Message", MessageSchema);
module.exports = Message;