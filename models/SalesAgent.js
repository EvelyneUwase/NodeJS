// defining our schema
const mongoose = require("mongoose");

const SalesAgentSchema = new mongoose.Schema({
  agentName: {
    type: String,
    trim: true,
    required: true,
  },

  agentId: {
    type: Number,
    trim: true,
  },

  email: {
    type: String,
    trim: true,
    required: true,
  },

  phoneNumber: {
    type: Number,
    trim: true,
    required: true,
  },

  tin: {
    type: Number,
    trim: true,
    required: true,
  },

  skills: {
    type: String,
    trim: true,
    required: true,
  },

  branch: {
    type: String,
    trim: true,
    required: true,
  },

  image: {
    type: String,
    trim: true,
   
  },


});

module.exports = mongoose.model("SalesAgent", SalesAgentSchema);
// this exposes this fields to be
// signup will be the name for the collection in the database
