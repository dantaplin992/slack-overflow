var mongoose = require("mongoose");

require("../mongodb_helper");
var Room = require("../../models/room")

describe("Room model", () => {
    beforeEach((done) => {
      mongoose.connection.collections.rooms.drop(() => {
        done();
      });
    });

    it("has a name", () => {
        var room = new Room({ name: "Ruby" });
        expect(room.name).toEqual("Ruby");
      });

    it("has an icon url", () => {
    var room = new Room({ icon: "myiconurl" });
    expect(room.icon).toEqual("myiconurl");
    });
});