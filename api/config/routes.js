var express  = require('express');
var router   = express.Router();
var passport = require("passport");

var authenticationsController = require('../controllers/authenticationsController');
var startupsController = require('../controllers/startupsController');
var workspacesController = require('../controllers/workspacesController');

router.post('/login', authenticationsController.login);
router.post('/register', authenticationsController.register);

router.route('/startups')
  .get(startupsController.startupsIndex)
  .post(startupsController.startupsCreate)
  
router.route('/startups/:id')
  .get(startupsController.startupsShow)
  .put(startupsController.startupsUpdate)
  .patch(startupsController.startupsUpdate)
  .delete(startupsController.startupsDelete)

router.route('/workspaces')
  .get(workspacesController.workspacesIndex)
  .post(workspacesController.workspacesCreate)

router.route('/workspaces/:id')
  .get(workspacesController.workspacesShow)
  .put(workspacesController.workspacesUpdate)
  .patch(workspacesController.workspacesUpdate)
  .delete(workspacesController.workspacesDelete)

module.exports = router