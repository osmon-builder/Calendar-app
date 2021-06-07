var path = require('path');
var fs = require('fs');
var moment = require('moment');


var Meeting = require('../models/Meeting');


function saveMeeting(req, res){
    var params = req.body

    if(!params.text) return res.status(200).send({message: 'Debes enviar un texto'});

	var meeting = new Meeting();
    meeting.text = params.text;
	meeting.file = 'null';	
	meeting.create_at = moment().unix();

    meeting.save ((err, meetingStored) => {
		if(err) return res.status(500).send({message: 'Error al guardar las publicaciones'});

		if(!meetingStored) return res.status(404).send({message: 'La reunion no ha sido guardada'});

		return res.status(200).send({meeting: meetingStored});

		
	});       

}

function getMeeting(req, res) {
    var meetingId = req.params.id;

    Meeting.findById(meetingId, (err, Meeting) => {
        if(err) return res.status(500).send({message: 'Error al devolder el seguimiento'});

        if(!Meeting) return res.status(404).send({message: 'No existe Meeting'});

        res.status(200).send({Meeting});
    });
}

function deteleMetting(req, res){
   var meetingId = req.params.id;

   Meeting.find({'user': req.user.sub, '_id': meetingId}).remove((err, meetingRemoved) => {

       if(err) return res.status(500).send({message: 'Error al borrrar la reunion'});

        if(!meetingRemoved) return res.status(404).send({message: 'No se ha borrado la publicacion'});

        return res.status(200).send({message: 'Publicacion eliminada'});
   });
}



module.export = {
    saveMeeting,
    getMeeting,
    deteleMetting,
    
}