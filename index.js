const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  name: String,
  buyers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  ],
  sellers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  ]
});

const UserSchema = new Schema({
  name: String,
  password: String,
  type: ["buyer", "seller", "admin"],
  events: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event"
    }
  ]
});

const User = mongoose.model("users", UserSchema);
const Event = mongoose.model("events", EventSchema);

// Main Logic
// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => {
    console.log("MongoDB Connected");

    // let panagbenga = new Event({
    //   name: "Panagbenga 2018"
    // });
    // panagbenga.save();

    // let chris = new User({
    //   name: "Christopher Espiritu",
    //   password: "password",
    //   type: "buyer"
    // });
    // chris.save();

    // User.findOne({ name: "Christopher Espiritu" }).then(user => {
    //   console.log(user.id);
    //   Event.findOne({ name: "Panagbenga 2018" }).then(event => {
    //     //   event.buyers.push(user.id);
    //     console.log(event.buyers);
    //     console.log(event);
    //     //   event.save();
    //   });
    // });
  })
  .catch(err => console.log(err));
