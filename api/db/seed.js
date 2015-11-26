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

var user1 = new User({
  local: {
    username:  "sareh",
    firstName: "Sareh",
    lastName:  "Heidari",
    email:     "s@h.com",
    password:  "password"
  }
});

user1.save(confirmUserSave);

var user2 = new User({
  local: {
    username:  "alknowles",
    firstName: "Alastair",
    lastName:  "Knowles",
    email:     "a@k.com",
    password:  "password"
  }
});

user2.save(confirmUserSave);

var user3 = new User({
  local: {
    username:  "sedstan",
    firstName: "Sedky",
    lastName:  "Said",
    email:     "s@s.com",
    password:  "password"
  }
});

user3.save(confirmUserSave);

var workspace1 = new Workspace({
  name:        "We Work Spitalfields",
  website:     "https://www.wework.com/locations/london/spitalfields",
  email:       "joinus@wework.com",
  address:     "1 Primrose St London EC2A 2EX",
  postcode:    "EC2A 2EX",
  telephone:   "+44 20 3695 4926",
  contactName: "Antonia Bayly",
  twitter:     "https://twitter.com/WeWork",
  facebook:    "https://www.facebook.com/WeWork/",
  openingTimesWeekdayOpen:  "9:00 a.m.",
  openingTimesWeekdayClose: "6:00 p.m.",
  openingTimesWeekendOpen:  "Closed",
  openingTimesWeekendClose: "Closed",
  photo:                    "http://tassic.co.uk/tassic-has-a-new-home-wework-spitalfields/",
  averageRent:              "£512",
  services:                 "High Speed Internet, Conference Rooms, Lounges,Micro-Roasted Coffee, Showers,Bike Storage,Community Managers, Purified Water, Weekly Events, Printing, Unique Interior Design ",
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
  // contactName: "",
  twitter:     "https://twitter.com/WorkHubs",
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
  // email:       "",
  address:     "87 Charterhouse Street, Clerkenwell, London EC1M 6HJ",
  postcode:    "EC1M 6HJ",
  telephone:   "+44 20 7336 8634",
  // contactName: "",
  twitter:     "https://twitter.com/huckletree",
  facebook:    "https://www.facebook.com/Huckletree",
  openingTimesWeekdayOpen:  "8:30 a.m",
  openingTimesWeekdayClose: "8:30 p.m",
  openingTimesWeekendOpen:  "Closed",
  openingTimesWeekendClose: "Closed",
  photo:                    "http://www.huckletree.com/wp-content/uploads/2014/01/Huckletree-Clerkenwell-6.jpg",
  averageRent:              "Contact for pricing",
  services:                 "Printing and use of the conference rooms are available to all users. Monthly Members have additional access to recurring services such as storage, registered business address, 24/7 access and having their company logo at reception. All our workspaces have several Skype and phone booths which are free to use whenever they are available.",
  sector:      "Business",
  spaceType:   "Co-working"
});
workspace3.save(confirmWorkspaceSave);

var workspace4 = new Workspace({
  name:        "Club Workspace Islington ",
  website:     "http://club.workspacegroup.co.uk/club-workspace/club-workspace-islington/",
  // email:       "",
  address:     "ScreenWorks, 22 Highbury Grove, London, N5 2EF",
  postcode:    "N5 2EF",
  telephone:   "+44 203 393 1253",
  // contactName: "",
  twitter:     "https://twitter.com/clubworkspace",
  facebook:    "https://www.facebook.com/clubworkspace/",
  openingTimesWeekdayOpen:  "  8:00 a.m.",
  openingTimesWeekdayClose: "  8:00 p.m.",
  openingTimesWeekendOpen:  "Closed",
  openingTimesWeekendClose: "Closed",
  photo:                    "http://www.workspace.co.uk/images/properties/touchdowns/OIXZKZOSXX.jpg",
  averageRent:              "£275",
  services:                 "Mailbox, Lockers, Printing, Meeting and Event Space",
  sector:      "Business",
  spaceType:   "Co-working"
});
workspace4.save(confirmWorkspaceSave);

var workspace5 = new Workspace({
  name:        "The Brew Shoreditch Stables",
  website:     "http://www.londoncoworking.co.uk/shoreditch-stables.php",
  // email:       "",
  address:     "London E2",
  postcode:    "",
  telephone:   "+44 20 3695 4926",
  // contactName: "",
  // twitter:     "",
  // facebook:    "",
  openingTimesWeekdayOpen:  "24 hours",
  openingTimesWeekdayClose: "24 hours",
  openingTimesWeekendOpen:  "24 hours",
  openingTimesWeekendClose: "24 hours",
  photo:                    "http://www.londoncoworking.co.uk/resources/shoreditch%2012.JPG",
  averageRent:              "Contact for pricing.",
  services:                 "Desk space furniture provided. (desk, chair, and shelf space) Your own phone line (if required at an extra cost)Fast broadband internet, Kitchen facilities, All bills included, Very secure with entry phone system",
  sector:      "Business",
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
  twitter:     "https://twitter.com/NudeEspresso",
  facebook:    "https://www.facebook.com/Nude-Espresso-149029546657/",
  openingTimesWeekdayOpen:  "7:30 a.m",
  openingTimesWeekdayClose: "5:00 p.m",
  openingTimesWeekendOpen:  "Closed",
  openingTimesWeekendClose: "Closed",
  photo:                    "http://www.urban75.org/blog/wp-content/uploads/2012/03/nude-espresso-soho-square-04.jpg",
  averageRent:              "Free",
  services:                 "WiFi, Coffee",
  sector:      "Food and Beverage",
  spaceType:   "Cafe"
});
workspace6.save(confirmWorkspaceSave);

var workspace7 = new Workspace({
  name:        "Canvas Cafe",
  website:     "https://thecanvascafe.org",
  email:       "ruth@thecanvascafe",
  address:     "42 Hanbury St., London E1 5JL",
  postcode:    "E1 5JL",
  telephone:   "+44 20 7018 1020 ",
  contactName: "Ruth",
  twitter:     "@thecanvascafe",
  facebook:    "https://facebook.com/thecavase1",
  openingTimesWeekdayOpen:  "9:00 a.m., Closed Monday",
  openingTimesWeekdayClose: "9:00 p.m., Closed Monday",
  openingTimesWeekendOpen:  "10:00 a.m.",
  openingTimesWeekendClose: "8:00 p.m.",
  photo:                    "http://thecanvascafe.org/sites/default/files/styles/blog-image-400/public/event.jpg?itok=ngeK5Mv6",
  averageRent:              "Contact for pricing",
  services:                 "Wifi, Coffee & Tea",
  sector:      "Food and Beverage, Creative",
  spaceType:   "Cafe"
});
workspace7.save(confirmWorkspaceSave);

var workspace8 = new Workspace({
  name:        "British Library",
  website:     "http://www.bl.uk/",
  email:       "Customer-Services@bl.uk",
  address:     "96 Euston Road, London NW1 2DB",
  postcode:    "NW1 2DB",
  telephone:   "+44 330 333 1144",
  // contactName: "",
  twitter:     "https://twitter.com/britishlibrary",
  facebook:    "https://www.facebook.com/britishlibrary/",
  openingTimesWeekdayOpen:  "9:30 a.m.",
  openingTimesWeekdayClose: "8:00 p.m.",
  openingTimesWeekendOpen:  "Saturday:9:30 a.m., Sunday: 11:00 a.m.",
  openingTimesWeekendClose: "Saturday:5:00 p.m., Sunday: 5:00 p.m.",
  photo:                    "http://i.telegraph.co.uk/multimedia/archive/01925/british-library_1925358b.jpg",
  averageRent:              "Free",
  services:                 "Desks, WiFi,Cafe & Restaurant ",
  sector:      "Education",
  spaceType:   "Library"
});
workspace8.save(confirmWorkspaceSave);

var workspace9 = new Workspace({
  name:        "Wellcome Library",
  website:     "http://wellcomelibrary.org/",
  email:       "library@wellcome.ac.uk",
  address:     "183 Euston Road, London NW1 2BE",
  postcode:    "NW1 2BE",
  telephone:   "+44 (0)20 7611 8722",
  // contactName: "",
  twitter:     "https://twitter.com/wellcomelibrary",
  facebook:    "https://www.facebook.com/Wellcomelibrary/",
  openingTimesWeekdayOpen:  "10:00 a.m.",
  openingTimesWeekdayClose: "6:00 p.m., Thursday: 8:00 p.m.",
  openingTimesWeekendOpen:  "Saturday: 10:00 a.m., Sunday: Closed",
  openingTimesWeekendClose: "Saturday: 4:00 p.m., Sunday: Closed",
  photo:                    "https://museuminsider.co.uk/wp-content/uploads/2012/11/Wellcome-Collection-Library-medium.jpg",
  averageRent:              "Free",
  services:                 "Copying and imaging, Computers, printing and WiFi, Study rooms, Cafe",
  sector:      "Education",
  spaceType:   "Library"
});
workspace9.save(confirmWorkspaceSave);

var workspace10 = new Workspace({
  name:        "Regus",
  website:     "https://regus.co.uk",
  // email:       "",
  address:     "The Broadgate Tower, 20 Primrose Street, 12th floor, London EC2A 2EW",
  postcode:    "SW1E 5RS",
  telephone:   "+44 020 7596 2700",
  contactName: "",
  twitter:     "@Regus_Uk",
  facebook:    "https://facebook.com/regus_uk",
  openingTimesWeekdayOpen:  "8:30 a.m.",
  openingTimesWeekdayClose: "6:00 p.m.",
  openingTimesWeekendOpen:  "Closed",
  openingTimesWeekendClose: "Closed",
  photo:                    "http://assets.regus.com/images/1430/officespace/6_454x340.jpg",
  averageRent:              "Contact for prices",
  services:                 "Contact for services",
  sector:      "Business",
  spaceType:   "Co-working"
});
workspace10.save(confirmWorkspaceSave);






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
