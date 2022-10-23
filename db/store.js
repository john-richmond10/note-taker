const fs = require('fs');
const path = require('path');
let db = require('./db.json');
const util = require('util');
const uuidv1 = require('uuid/v1');

const readFileSync = util.promisify(fs.readFile);
const writeFileSync = util.promisify(fs.writeFile);

class Store {

    read() {
        return readFileSync('db/db.json', 'utf8');
    }

    write(note) {
        return writeFileSync('db/db.json', JSON.stringify(note));
    }

    getNotes() {
        return this.read()
        .then((notes) => {
            let savedNotes;
            try {
                savedNotes = [].concat(JSON.parse(notes));
            } catch (err) {
                savedNotes = [];
            }
            return savedNotes;
        })
    }

    createNote(note) {
        const { title, text } = note;
        const createdNote = { title, text, id: uuidv1() };

        return this.getNotes()
        .then((notes) => [...notes, createdNote])
        .then((updateNotes) => this.write(updateNotes))
        .then(() => createdNote);
    }
}
// function createNote(body) {
//     let note = body;
//     db['db'].push(note);
//     fs.writeFileSync(
//         path.join(__dirname, '../db/db.json'),
//         JSON.stringify(db, null, 1)
//     );
//     return note;
// };

module.exports = new Store();

