// defining our schema
const mongoose = require("mongoose");
const passPortLocalMongoose = require("passport-local-mongoose");

const SignUpSchema = new mongoose.Schema({
  newusername: {
    type: String,
    trim: true,
    // required:true,
  },

  email: {
    type: String,
    trim: true,
    // required: true,
    unique: true,
  },

  role: {
    type: String,
  },

  branch: {
    type: String,
  }

  //  newpasword: {
  //     type:String,
  //     trim:true,
  //     // required: true,
  //  },

  //  confirmpasword:{
  //     type:String,
  //     trim:true,
  //     // required:true,
  //  }
});

SignUpSchema.plugin(passPortLocalMongoose, {
  usernameField: "email",
});

module.exports = mongoose.model("Signup", SignUpSchema);
// this exposes this fields to be
// signup will be the name for the collection in the database
