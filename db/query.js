var util = require("util");
var fs = require("fs");
// var {v4:uuidv4} = require("uuid");
var readFileAsync = util.promisify(fs.readFile);
var writeFileAsync = util.promisify(fs.writeFile);
class Queries {
    read() {
        return readFileAsync("db/db.json", "utf-8");
    };

    write(note) {
        return writeFileAsync("db/db.json", JSON.stringify(note));
    };
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

    };
    addNote() {

    };
    removeNote() {

    };

};
module.exports = new Queries();