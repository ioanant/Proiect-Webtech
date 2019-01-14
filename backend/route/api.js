const express = require('express')
const models = require('../pages/index');

const router = express.Router()

const calendarController = require('../controls/CalendarController.js')

router.get('/appointments', calendarController.findAll)
router.get('/appointments/:id', calendarController.findById)

const notesController = require('../controls/NotesController.js')

router.get('https://proiect-ioanaantonescu.c9users.io/notes.html', notesController.findAll)
router.get('/notes/:id',notesController.findById)

module.exports = router