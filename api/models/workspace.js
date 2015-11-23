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
    openingTimesWeekdayOpen:  { type: String },
    openingTimesWeekdayClose: { type: String },
    openingTimesWeekendOpen:  { type: String },
    openingTimesWeekendClose: { type: String },
    photo:                    { type: String },
    averageRent:              { type: String },
    services:                 { type: String },
    sector:      { type: String, required: true },
    spaceType:                { type: String}
});

module.exports = mongoose.model("Workspace", workspaceSchema);