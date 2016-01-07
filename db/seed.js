var mongoose  = require('mongoose');
var User      = require('../models/user');
var Startup   = require('../models/startup');
var Workspace = require('../models/workspace');

var config    = require('../config/config');

mongoose.connect(config.database);

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
    password:  User.encrypt("password")
  }
});

user1.save(confirmUserSave);

var user2 = new User({
  local: {
    username:  "alknowles",
    firstName: "Alastair",
    lastName:  "Knowles",
    email:     "a@k.com",
    password:  User.encrypt("password")
  }
});

user2.save(confirmUserSave);

var user3 = new User({
  local: {
    username:  "sedstan",
    firstName: "Sedky",
    lastName:  "Said",
    email:     "s@s.com",
    password:  User.encrypt("password")
  }
});

user3.save(confirmUserSave);


var startup1 = new Startup({   
    name:                   "Secret Escapes",
    headquarters:           "32-38 Saffron Hill, London, EC1N 8FH",
    latitude:               "51.520424",
    longitude:              "-0.106586",
    founders:               "",
    sector:                 "Travel",
    email:                  "support@secretescapes.com",
    phone:                  "0843 22 77 777",
    website:                "http://www.secretescapes.com",
    twitter:                "https://twitter.com/secret_escapes",
    facebook:               "https://www.facebook.com/SecretEscapes",
    photo:                  "https://pbs.twimg.com/profile_images/619451267102838784/iqaEBUTm.jpg",
    logo:                   "https://pbs.twimg.com/profile_images/619451267102838784/iqaEBUTm.jpg"
});
startup1.save();

var startup2 = new Startup({   
    name:                   "Medium Rare Digital",
    headquarters:           "2 Arlington Avenue, London, N1 7AX",
    latitude:               "51.536382",
    longitude:              "-0.090462",
    founders:               "",
    sector:                 "Tech",
    email:                  "info@mediumraredigital.co.uk",
    phone:                  "",
    website:                "https://www.mediumraredigital.co.uk",
    twitter:                "https://twitter.com/DigitalSteak",
    facebook:               "",
    photo:                  "https://pbs.twimg.com/profile_images/526426109311586304/8dXLyxFq.jpeg",
    logo:                   "https://pbs.twimg.com/profile_images/526426109311586304/8dXLyxFq.jpeg"
});
startup2.save(confirmStartupSave);

var startup3 = new Startup({   
    name:                   "The Idle Man",
    headquarters:           "Universal House, 88-94 Wentworth Street, London, E1 7SA",
    latitude:               "51.517099",
    longitude:              "-0.071967",
    founders:               "",
    sector:                 "Clothing",
    email:                  "help@theidleman.com",
    phone:                  "0333 202 3325",
    website:                "http://theidleman.com",
    twitter:                "https://twitter.com/idle",
    facebook:               "https://www.facebook.com/Idle/",
    photo:                  "https://pbs.twimg.com/profile_images/634675132582207488/kW7RaSlU.jpg",
    logo:                   "https://pbs.twimg.com/profile_images/634675132582207488/kW7RaSlU.jpg"
});
startup3.save(confirmStartupSave);

var startup4 = new Startup({   
    name:                   "Startup Manufactory",
    headquarters:           "32 Aybrook Street, Marylebone, London W1U",
    latitude:               "51.519578",
    longitude:              "-0.153228",
    founders:               "",
    sector:                 "Tech",
    email:                  "info@startupmanufactory.com",
    phone:                  "07958274941",
    website:                "http://www.startupmanufactory.com",
    twitter:                "",
    facebook:               "",
    photo:                  "http://www.startupmanufactory.com/wp-content/uploads/2014/07/startup-manufactory-logo-250.png",
    logo:                   "http://www.startupmanufactory.com/wp-content/uploads/2014/07/startup-manufactory-logo-250.png"
});
startup4.save(confirmStartupSave);

var startup5 = new Startup({   
    name:                   "Appear Here",
    headquarters:           "19 Mandela Street, London Borough of Camden, London NW1 0DU",
    latitude:               "51.537962",
    longitude:              "-0.136635",
    founders:               "",
    sector:                 "Tech",
    email:                  "hello@appearhere.co.uk",
    phone:                  "0203 096 2180",
    website:                "https://www.appearhere.co.uk",
    twitter:                "https://twitter.com/appearhere",
    facebook:               "https://www.facebook.com/AppearHere",
    photo:                  "https://scontent-cdg2-1.xx.fbcdn.net/hphotos-xaf1/v/t1.0-9/527440_536097079742183_1407730544_n.jpg?oh=2052b175a86b8f5c137e58a0046c1c2a&oe=56F670DA",
    logo:                   "https://scontent-cdg2-1.xx.fbcdn.net/hphotos-xaf1/v/t1.0-9/527440_536097079742183_1407730544_n.jpg?oh=2052b175a86b8f5c137e58a0046c1c2a&oe=56F670DA"
});
startup5.save(confirmStartupSave);

var startup6 = new Startup({   
    name:                   "SmartTrade App",
    headquarters:           "10-16 Scrutton Street, London, EC2A 4RU",
    latitude:               "51.523478",
    longitude:              "-0.083679",
    founders:               "",
    sector:                 "Tech",
    email:                  "support@smarttradeapp.com",
    phone:                  "0203 322 8414",
    website:                "https://smarttradeapp.com",
    twitter:                "https://twitter.com/smarttradeapp",
    facebook:               "",
    photo:                  "https://pbs.twimg.com/profile_images/648455689032044544/7N-90fkq.png",
    logo:                   "https://pbs.twimg.com/profile_images/648455689032044544/7N-90fkq.png"
});
startup6.save(confirmStartupSave);

var startup7 = new Startup({   
    name:                   "Quick Blox",
    headquarters:           "83 Baker Street, London, Greater London, W1U 6AG",
    latitude:               "51.520165",
    longitude:              "-0.156893",
    founders:               "",
    sector:                 "Tech",
    email:                  "enterprise@quickblox.com",
    phone:                  "020 3053 0660",
    website:                "http://quickblox.com",
    twitter:                "https://twitter.com/QuickBlox",
    facebook:               "https://www.facebook.com/quickblox",
    photo:                  "https://scontent-lhr3-1.xx.fbcdn.net/hphotos-xfa1/v/t1.0-9/64927_10151537314663888_653981503_n.png?oh=eaff9473454b3a9869e012aa9c8410d8&oe=56EED7BB",
    logo:                   "https://scontent-lhr3-1.xx.fbcdn.net/hphotos-xfa1/v/t1.0-9/64927_10151537314663888_653981503_n.png?oh=eaff9473454b3a9869e012aa9c8410d8&oe=56EED7BB"
});
startup7.save(confirmStartupSave);

var startup8 = new Startup({   
    name:                   "Stick Sports",
    headquarters:           "14 Bonhill Street, London, Greater London, EC2A 4BX",
    latitude:               "51.523034",
    longitude:              "-0.084900",
    founders:               "",
    sector:                 "Sport",
    email:                  "",
    phone:                  "",
    website:                "http://www.sticksports.com",
    twitter:                "https://twitter.com/stickcricket",
    facebook:               "https://www.facebook.com/stickcricket",
    photo:                  "https://pbs.twimg.com/profile_images/1968891891/tw_sc_thumb.jpg",
    logo:                   "https://pbs.twimg.com/profile_images/1968891891/tw_sc_thumb.jpg"
});
startup8.save(confirmStartupSave);

var startup9 = new Startup({   
    name:                   "Growth Intelligence",
    headquarters:           "1 Canada Square, Canary Wharf, London, E14 5AH",
    latitude:               "51.504603",
    longitude:              "-0.017504",
    founders:               "",
    sector:                 "Marketing",
    email:                  "info@growthintel.com",
    phone:                  "020 37257575",
    website:                "http://growthintel.com",
    twitter:                "https://twitter.com/growthintel",
    facebook:               "",
    photo:                  "https://pbs.twimg.com/profile_images/614431071556501504/WclWexaB.png",
    logo:                   "https://pbs.twimg.com/profile_images/614431071556501504/WclWexaB.png"
});
startup9.save(confirmStartupSave);

var startup10 = new Startup({   
    name:                   "Second Home",
    headquarters:           "68-80 Hanbury St, London, E1 5JL",
    latitude:               "",
    longitude:              "",
    founders:               "Sam Aldenton, Rohan Silva",
    sector:                 "Tech",
    email:                  "hello@secondhome.io",
    phone:                  "020 3818 3240",
    website:                "https://www.secondhome.io",
    twitter:                "https://www.twitter.com/secondhomeldn",
    facebook:               "https://www.facebook.com/secondhomeldn",
    photo:                  "https://nuu-assets.s3.amazonaws.com/uploads/attachment/filename/220/large_SH_2part_Logo_Texture_100_RGB_06_Lo__1_.png",
    logo:                   "https://nuu-assets.s3.amazonaws.com/uploads/attachment/filename/220/large_SH_2part_Logo_Texture_100_RGB_06_Lo__1_.png"
});
startup10.save(confirmStartupSave);

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
  address:     "19 Soho Square, London W1D 3QN",
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



