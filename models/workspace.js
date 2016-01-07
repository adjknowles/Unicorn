var mongoose = require("mongoose");

var workspaceSchema = new mongoose.Schema({ 
    // name:        { type: String, required: true },
    // website:     { type: String, required: true },
    // email:       { type: String, required: true },
    // address:     { type: String, required: true },
    // postcode:    { type: String, required: true },
    name:        { type: String },
    website:     { type: String },
    email:       { type: String },
    address:     { type: String },
    postcode:    { type: String },
    latitude:    { type: Number },
    longitude:   { type: Number },
    telephone:   { type: String },
    contactName: { type: String },
    // twitter:     { type: String, required: true },
    twitter:     { type: String },
    facebook:    { type: String },
    openingTimesWeekdayOpen:  { type: String },
    openingTimesWeekdayClose: { type: String },
    openingTimesWeekendOpen:  { type: String },
    openingTimesWeekendClose: { type: String },
    photo:                    { type: String },
    averageRent:              { type: String },
    services:                 { type: String },
    // sector:      { type: String, required: true },
    sector:      { type: String },
    spaceType:                { type: String}
});

module.exports = mongoose.model("Workspace", workspaceSchema);