const fs = require('fs');
const notes = require('../db/db.json');
const {createNote} = require('../db/create');
const router = require('express').Router();

router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results.db);
});

router.post('/notes', (req, res) => {
    let newNote = createNote(req.body, notes);
    res.json(newNote);
});

module.exports = router;
