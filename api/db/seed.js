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
startup1.save(confirmStartupSave);

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