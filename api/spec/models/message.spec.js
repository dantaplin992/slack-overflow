var mongoose = require("mongoose");
require("../mongodb_helper");
var Message = require("../../models/message")

const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  displayName: String,
  icon: String,
  password: String,
});

const User = mongoose.model("User", UserSchema);

const mockUser = new User({
  firstName: "John",
  lastName: "Doe",
  displayName: "John Doe",
  icon: "https://avatars0.githubusercontent.com/u/174825?s=460&v=4",
  password: "password",
});


describe("Message model", () => {
    beforeEach((done) => {
      mongoose.connection.collections.messages.drop(() => {
        done();
      });
    });

    it("has a message", () => {
        var message = new Message({ message: "some message" });
        expect(message.message).toEqual("some message");
      });

    it("has an author id", () => {
        var message = new Message({ authorId: mockUser });
        expect(message.authorId).toEqual(mockUser);
    });

    it("has a reaction", () => {
        var message = new Message({ reactions: { user: mockUser, emoji: "😊" }});
        expect(message.reactions[0].user).toEqual(mockUser);
        expect(message.reactions[0].emoji).toEqual("😊");
    });

    it("shows a reply to a message", () => {
        const mockMessage = new Message({ message: "mock message" });
        var message = new Message({ isReplyTo: mockMessage});
        expect(message.isReplyTo).toEqual(mockMessage);
    });

    it("has the time of post creation", () => {
        const mockDateObject = new Date("2022-04-20T13:33:42.767Z")
        const spy = jest
        .spyOn(global, 'Date')
        .mockImplementation(() => mockDateObject)
    
        var message = new Message({ message: "some message"})
        
        spy.mockRestore()
    
        expect(message.timeStamp).toEqual(new Date("2022-04-20T13:33:42.767Z"))
      });
});