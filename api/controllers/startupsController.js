var Startup = require('../models/startup');

function startupsIndex(req, res) {
  Startup.find(function(err, startups){
    if (err) return res.status(404).json({message: 'Something went wrong.'});
    res.status(200).json({ startups: startups });
  });
}

function startupsShow(req, res){
  Startup.findById(req.params.id, function(err, startup){
    if (err) return res.status(404).json({message: 'Something went wrong.'});
    res.status(200).json({ startup: startup });
  });
}

function startupsUpdate(req, res){
  Startup.findByIdAndUpdate(req.params.id, req.body, function(err, startup) {
    if (err) return res.status(500).json({message: "Something went wrong!"});
    if (!startup) return res.status(404).json({message: 'No startup found.'});

    startup.save(function(err) {
     if (err) return res.status(500).json({message: "Something went wrong!"});

      res.status(201).json({message: 'Startup successfully updated.', startup: startup});
    });
  });
}

function startupsDelete(req, res){
  Startup.findByIdAndRemove({_id: req.params.id}, function(err){
   if (err) return res.status(404).json({message: 'Something went wrong.'});
   res.status(200).json({message: 'Startup has been successfully deleted'});
  });
}

function startupsCreate(req, res) {
  Startup.create(req.body, function(err, startup) {
    if (err) return res.status(500).json({message: "Something went wrong!"});
    return res.status(200).json({ startup: startup})
  })
}


module.exports = {
  startupsIndex:  startupsIndex,
  startupsShow:   startupsShow,
  startupsUpdate: startupsUpdate,
  startupsDelete: startupsDelete,
  startupsCreate: startupsCreate
}