var router = require("express").Router();
const queries = require("../db/query");
router.get("/notes", (req, res) => {
    queries.getNotes().then((notes) => {
        return res.json(notes)
    });

});
router.post("/notes", (req, res) => {
    queries.addNote(req.body).then((notes) => {
        return res.json(notes)
    });

});
router.delete("/notes/:id", (req, res) => {
    queries.removeNote(req.params.id).then((notes) => {
        return res.json(notes)
    });

});



module.exports = router;