var mongoose  = require('mongoose');
var User      = require('../models/user');
var Startup   = require('../models/startup');
var Workspace = require('../models/workspace');

function confirmUserSave(err, user){
  if (err) console.log(err);
  console.log("User has been added.", user);
}

function confirmWorkspaceSave(err, workspace){
  if (err) console.log(err);
  console.log("Workspace has been added.", workspace);
}

function confirmStartupSave(err, startup){
  if (err) console.log(err);
  console.log("Startup has been added.",startup);
}

// var user1 = new User({
//   local: {
//     username:  "sareh",
//     firstName: "Sareh",
//     lastName:  "Heidari",
//     email:     "s@s.com",
//     password:  "password"
//   }
// });

// user1.save(confirmUserSave);

var workspace1 = new Workspace({
  name:        "We Work Spitalfields",
  website:     "https://www.wework.com/locations/london/spitalfields",
  email:       "joinus@wework.com",
  address:     "1 Primrose St London EC2A 2EX",
  postcode:    "EC2A 2EX",
  telephone:   "+44 20 3695 4926",
  contactName: "Antonia Bayly",
  twitter:     "WeWorkLDN",
  // facebook:    "",
  // openingTimesWeekdayOpen:  "",
  // openingTimesWeekdayClose: "",
  // openingTimesWeekendOpen:  "",
  // openingTimesWeekendClose: "",
  // photo:                    "",
  // averageRent:              "",
  // services:                 "",
  sector:      "Tech",
  spaceType:   "Co-working"
});
workspace1.save(confirmWorkspaceSave);

var startup1 = new Startup({
  name:         "Second Home",
  headquarters: "68-80 Hanbury St, London E1 5JL",
  founders:     "Sam Aldenton, Rohan Silva",
  sector:       "Tech",
  email:        "hello@secondhome.io",
  phone:        "020 3818 3240",
  website:      "https://www.secondhome.io",
  twitter:      "https://www.twitter.com/secondhomeldn",
  facebook:     "https://www.facebook.com/secondhomeldn",
  photo:        "http://static.dezeen.com/uploads/2014/12/Second-Home-by-SelgasCano_dezeen_784_1.jpg",
  logo:         "https://nuu-assets.s3.amazonaws.com/uploads/attachment/filename/220/large_SH_2part_Logo_Texture_100_RGB_06_Lo__1_.png"
});
startup1.save(confirmStartupSave);
