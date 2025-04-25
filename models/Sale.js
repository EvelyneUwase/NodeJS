const mongoose = require("mongoose");

const SaleSchema = new mongoose.Schema({
    produceName:{
        type: String,
        trim: true,
    },

    clientName:{
        type: String,
        trim: true,
        required: true,
    },

    quantity:{
        type: Number,
        trim:true,
        required: true,
    },

    cost:{
        type:Number,
        trim: true,
        required:true,
    },

    date:{
        type: String,
        trim: true,
        required: true,
    },

    inCharge:{
        type: String,
        trim: true,
        required: true,
    },

    supplierName:{
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

module.exports = mongoose.model("Sale", SaleSchema);