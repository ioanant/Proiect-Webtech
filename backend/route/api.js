const express = require('express')
const models = require('../pages/index');

const router = express.Router()

const calendarController = require('../controls/CalendarController.js')

router.get('/appointments', calendarController.findAll)
router.get('/appointments/:id', calendarController.findById)
router.post('/appointments',calendarController.postAppointment)

const notesController = require('../controls/NotesController.js')

router.get('/notes', notesController.findAll)
router.get('/notes/:id',notesController.findById)


module.exports = router