var mongoose  = require('mongoose');
var User      = require(../models/user);
var Startup   = require(../models/startup);
var Workspace = require(../models/workspace);

function confirmUserSave(err, user){
  if (err) console.log(err);
  console.log("User " + user.email + " has been added.");
}

function confirmWorkspaceSave(err, user){
  if (err) console.log(err);
  console.log("Workspace " + workspace.name + " has been added.");
}

function confirmStartupSave(err, user){
  if (err) console.log(err);
  console.log("Startup " + startup.name + " has been added.");
}

var user1 = new User({
  local: {
    username:  "sareh",
    firstName: "Sareh",
    lastName:  "Heidari",
    email:     "s@s.com",
    password:  "password"
  }
});

user1.save(confirmUserSave);

// var workspace1 = new User({
// });
// workspace1.save(confirmWorkspaceSave);

// var startup1 = new User({
// });
// startup1.save(confirmStartupSave);
