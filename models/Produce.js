const mongoose = require("mongoose");

const ProduceSchema = new mongoose.Schema({
    date:{
        type: String,
        trim: true,
    },

    supplierName:{
        type: String,
        trim: true,
        required: true,
    },

    produceName:{
        type: String,
        trim:true,
        required: true,
    },

    quantity:{
        type:Number,
        trim: true,
        required:true,
    },

    cost:{
        type: String,
        trim: true,
        required: true,
    },

    inCharge:{
        type: String,
        trim: true,
        required: true,
    },

    branch:{
        type: String,
        trim: true,
        required: true,
    },

    total:{
        type: String,
        trim: true,
        required: true,
    },
    
});

module.exports = mongoose.model("Produce", ProduceSchema);