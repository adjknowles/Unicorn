var mongoose = require("mongoose");

var workspaceSchema = new mongoose.Schema({ 
    name:        { type: String, required: true },
    website:     { type: String, required: true },
    email:       { type: String, required: true },
    address:     { type: String, required: true },
    postcode:    { type: String, required: true },
    telephone:   { type: String },
    contactName: { type: String },
    twitter:     { type: String, required: true },
    facebook:    { type: String },
    openingTimesWeekdayOpen:  { type: String, required: true },
    openingTimesWeekdayClose: { type: String, required: true },
    openingTimesWeekendOpen:  { type: String, required: true },
    openingTimesWeekendClose: { type: String, required: true },
    photo:       { type: String },
    averageRent: { type: String, required: true },
    services:    { type: String, required: true },
    sector:      { type: String, required: true },
    type:        { type: String, required: true }
});

module.exports = mongoose.model("Workspace", workspaceSchema);