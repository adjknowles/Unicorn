var mongoose = require("mongoose");

var startupSchema = new mongoose.Schema({ 
    // name:                   { type: String, required: true },
    // headquarters:           { type: String, required: true },    
    name:                   { type: String },
    headquarters:           { type: String },
    latitude:               { type: Number },
    longitude:              { type: Number },
    founders:               { type: String },
    // sector:                 { type: String, required: true },
    // email:                  { type: String, required: true },
    sector:                 { type: String },
    email:                  { type: String },
    phone:                  { type: String },
    // website:                { type: String, required: true },
    // twitter:                { type: String, required: true },
    website:                { type: String },
    twitter:                { type: String },
    facebook:               { type: String },
    photo:                  { type: String },
    logo:                   { type: String }
});

module.exports = mongoose.model("Startup", startupSchema);