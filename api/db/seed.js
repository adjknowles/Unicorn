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
  twitter:     "@WeWorkLDN",
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

var workspace2 = new Workspace({
  name:        "@Work Hubs",
  website:     "http://www.atworkhubs.co.uk/",
  email:       "Boom!!@atworkhubs.co.uk",
  address:     "105a Euston Street, London, NW1 2EW ",
  postcode:    "NW1 2EW",
  telephone:   "+44 20 3598 2046",
  contactName: "",
  twitter:     "@WorkHubs",
  facebook:    "https://www.facebook.com/At-Work-Hubs-303550886429918/?fref=photo",
  openingTimesWeekdayOpen:  "8.30 am",
  openingTimesWeekdayClose: "5.30 pm",
  openingTimesWeekendOpen:  "Closed",
  openingTimesWeekendClose: "Closed",
  photo:                    "http://photos1.meetupstatic.com/photos/event/a/6/7/4/event_213882612.jpeg",
  averageRent:              "£150",
  services:                 "Desk-space, Quiet space, Meeting room & venue space, Collaborative space, Relax in lounge/SKY TV, Kitchen area/break-out, Lockers for storage, 100Mbps bband & reliable Wi-Fi, Fab Nespresso coffee & teas",
  sector:      "Business",
  spaceType:   "Co-working"
});
workspace2.save(confirmWorkspaceSave);

var workspace3 = new Workspace({
  name:        "Huckletree",
  website:     "http://www.huckletree.com/",
  email:       "",
  address:     "87 Charterhouse Street, Clerkenwell, London EC1M 6HJ",
  postcode:    "EC1M 6HJ",
  telephone:   "+44 20 7336 8634",
  contactName: "",
  twitter:     "@huckletree",
  facebook:    "https://www.facebook.com/Huckletree",
  openingTimesWeekdayOpen:  "8:30 a.m",
  openingTimesWeekdayClose: "8:30 p.m",
  openingTimesWeekendOpen:  "Closed",
  openingTimesWeekendClose: "Closed",
  photo:                    "http://www.huckletree.com/wp-content/uploads/2014/01/Huckletree-Clerkenwell-6.jpg",
  averageRent:              "Book a visit for enquiry",
  // services:                 "",
  sector:      "",
  spaceType:   "Co-working"
});
workspace3.save(confirmWorkspaceSave);

var workspace4 = new Workspace({
  name:        "Club Workspace Islington ",
  website:     "http://club.workspacegroup.co.uk/club-workspace/club-workspace-islington/",
  email:       "",
  address:     "ScreenWorks, 22 Highbury Grove, London, N5 2EF",
  postcode:    "N5 2EF",
  telephone:   "+44 203 393 1253",
  contactName: "",
  twitter:     "@clubworkspace",
  facebook:    "https://www.facebook.com/clubworkspace/",
  openingTimesWeekdayOpen:  "  8:00 a.m. ",
  openingTimesWeekdayClose: "  8:00 p.m. ",
  openingTimesWeekendOpen:  "Closed",
  openingTimesWeekendClose: "Closed",
  photo:                    "http://www.workspace.co.uk/images/properties/touchdowns/OIXZKZOSXX.jpg",
  averageRent:              "£275",
  // services:                 "",
  sector:      "",
  spaceType:   "Co-working"
});
workspace4.save(confirmWorkspaceSave);

var workspace5 = new Workspace({
  name:        "The Brew Shoreditch Stables",
  website:     "http://www.londoncoworking.co.uk/shoreditch-stables.php",
  email:       "",
  address:     "London E2",
  postcode:    "",
  telephone:   "+44 20 3695 4926",
  contactName: "",
  twitter:     "",
  // facebook:    "",
  // openingTimesWeekdayOpen:  "",
  // openingTimesWeekdayClose: "",
  // openingTimesWeekendOpen:  "",
  // openingTimesWeekendClose: "",
  // photo:                    "",
  // averageRent:              "",
  // services:                 "",
  sector:      "",
  spaceType:   "Co-working"
});
workspace5.save(confirmWorkspaceSave);

var workspace6 = new Workspace({
  name:        "Nude Espresso",
  website:     "http://www.nudeespresso.com/",
  email:       "roastery@nudeespresso.com",
  address:     "19 Soho Square, London W1D 3QN
",
  postcode:    "W1D 3QN",
  telephone:   "+44 20 3695 4926",
  contactName: "Tom Flawith",
  twitter:     "@NudeEspresso",
  facebook:    "https://www.facebook.com/Nude-Espresso-149029546657/",
  openingTimesWeekdayOpen:  "7:30 a.m",
  openingTimesWeekdayClose: "5:00 p.m",
  openingTimesWeekendOpen:  "Closed",
  openingTimesWeekendClose: "Closed",
  // photo:                    "",
  averageRent:              "Free",
  services:                 "WiFi, Coffee",
  sector:      "",
  spaceType:   "Cafe"
});
workspace6.save(confirmWorkspaceSave);






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
