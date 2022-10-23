
const notes = require('../db/store');
const router = require('express').Router();

router.get('/notes', ( req, res ) => {
    notes
        .getNotes()
        .then((notes) => {
            return res.json(notes);
        })
});

router.post('/notes', ( req, res) => {
    notes
        .createNote(req.body)
        .then((note) => res.json(note))
})
module.exports = router;
