var mongoose = require("mongoose");

var startupSchema = new mongoose.Schema({ 
    name:                   { type: String, required: true },
    headquarters:           { type: String, required: true },
    founders:               { type: String },
    sector:                 { type: String, required: true },
    email:                  { type: String, required: true },
    phone:                  { type: String },
    website:                { type: String, required: true },
    twitter:                { type: String, required: true },
    facebook:               { type: String },
    photo:                  { type: String },
    logo:                   { type: String }
});

module.exports = mongoose.model("Startup", startupSchema);