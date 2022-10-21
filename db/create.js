const fs = require('fs');
const path = require('path');
let db = require('../db/db.json');

function createNote(body) {
    let note = body;
    db['db'].push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(db, null, 1)
    );
    return note;
};

module.exports = {
    createNote
};