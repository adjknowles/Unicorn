var Workspace = require('../models/workspace');

function workspacesIndex(req, res) {
  Workspace.find(function(err, workspaces){
    if (err) return res.status(404).json({message: 'Something went wrong.'});
    res.status(200).json({ workspaces: workspaces });
  });
}

function workspacesShow(req, res){
  Workspace.findById(req.params.id, function(err, workspace){
    if (err) return res.status(404).json({message: 'Something went wrong.'});
    res.status(200).json({ workspace: workspace });
  });
}

function workspacesUpdate(req, res){
  Workspace.findByIdAndUpdate(req.params.id, req.body, function(err, workspace) {
    if (err) return res.status(500).json({message: "Something went wrong!"});
    if (!workspace) return res.status(404).json({message: 'No workspace found.'});

    workspace.save(function(err) {
     if (err) return res.status(500).json({message: "Something went wrong!"});

      res.status(201).json({message: 'Workspace successfully updated.', workspace: workspace});
    });
  });
}

function workspacesDelete(req, res){
  Workspace.findByIdAndRemove({_id: req.params.id}, function(err){
   if (err) return res.status(404).json({message: 'Something went wrong.'});
   res.status(200).json({message: 'Workspace has been successfully deleted'});
  });
}

function workspacesCreate(req, res) {
  Workspace.create(req.body, function(err, workspace) {
    if (err) return res.status(500).json({message: "Something went wrong!"});
    return res.status(200).json({ workspace: workspace})
  })
}

module.exports = {
  workspacesIndex:  workspacesIndex,
  workspacesShow:   workspacesShow,
  workspacesUpdate: workspacesUpdate,
  workspacesDelete: workspacesDelete,
  workspacesCreate: workspacesCreate
}