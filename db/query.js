var util = require("util");
var fs = require("fs");
var {v4:uuidv4} = require("uuid");
var readFileAsync = util.promisify(fs.readFile);
var writeFileAsync = util.promisify(fs.writeFile);
class Queries {
    read() {
        return readFileAsync("db/db.json", "utf-8");
    }

    write(note) {
        return writeFileAsync("db/db.json", JSON.stringify(note));
    }
    getNotes() {
        return this.read().then((notes) => {
            let parsedNotes;
            if ([].concat(JSON.parse(notes))) {
                parsedNotes = [].concat(JSON.parse(notes))
            } else {
                parsedNotes = []
            };
          
            return parsedNotes
        });

    }
    addNote(note) {
        const { title, text } = note
        if (!title || !text) {
            throw new Error("Title and/or text cannot be blank.")
        };
        const newNote = {
            title,
            text,
            id: uuidv4()
        };
        return this.getNotes()
      .then((notes) => [...notes, newNote])
      .then((updatedNotes) => this.write(updatedNotes))
      .then(() => newNote);



    }
    removeNote(id) {
        return this.getNotes().then((notes) => notes.filter((note) => note.id !== id))
        .then((filteredNotes) => this.write(filteredNotes));
    }

};
module.exports = new Queries();