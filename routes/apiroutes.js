var router = require("express").Router();
const queries = require("../db/query");
router.get("/notes", (req, res) => {
    queries.getNotes().then((notes) => {
        return res.json(notes)
    });

});

module.exports = router;