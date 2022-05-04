var mongoose = require("mongoose");

require("../mongodb_helper");
var User = require("../../models/user")

describe("User model", () => {
    beforeEach((done) => {
      mongoose.connection.collections.users.drop(() => {
        done();
      });
    });

    it("has a first name", () => {
        var user = new User({ firstName: "Ruby" });
        expect(user.firstName).toEqual("Ruby");
      });

    it("has a last name", () => {
        var user = new User({ lastName: "Ranford" });
        expect(user.lastName).toEqual("Ranford");
    });

    it("has a display name", () => {
        var user = new User({ displayName: "Display name test" });
        expect(user.displayName).toEqual("Display name test");
    });

    it("has an icon url", () => {
        var user = new User({ icon: "myiconurl" });
        expect(user.icon).toEqual("myiconurl");
    });

    it("has a password", () => {
        var user = new User({ password: "password" });
        expect(user.password).toEqual("password");
    });
});