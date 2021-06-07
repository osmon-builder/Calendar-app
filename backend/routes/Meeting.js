var express = require('express');
<<<<<<< HEAD
var MeetingController = require('../controllers/meeting');
var api = express.Router();





api.post('/meeting', MeetingController.saveMeeting);
api.get('/meeting/:id', MeetingController.getMeeting);
api.delete('/meeting/:id', MeetingController.deteleMetting);

=======
var MeetingController = require('../controllers/MeetingController');
var api = express.Router();


var multipart = require('connect-multiparty');

>>>>>>> 143a851db928f325efc614ad3b81446e7fc90546


api.post('/publication', meetingController.saveMeeting);
api.get('/publication/:id', meetingController.getMeeting);
api.delete('/publication/:id', meetingController.deteleMeeting);



module.exports = api;