// Imports
const router = require("express").Router();
const path = require("path");
const fs = require("fs");
const uuid = require("uuid");
const { isBuffer } = require("util");


// Retrieve all notes
router.get("/notes", (req, res) => {
    res.json(notes);
})

// Post a note
router.post("/notes", (req, res) => {
    const postNote = req.body;
    postNote.id = uuid.v4();
    notes.push(postNote);

    fs.writeFileSync("./Develpp/db/db.json", JSON.stringify(notes), function(err) {
        if (err) {
            return console.log(err);
        }
    });
    
    res.json(notes);
});

// Delete a note
router.delete("/notes/:id", (req, res) => {
    const deleteNote = notes.filter(delNote => delNote.id !==req.params.id)

        fs.writeFileSync("./Develop/db/db.json", JSON.stringify(deleteNote), function(err) {
            if (err) {
                return console.log(err);
            }
        });

    res.json(notes);
});

module.exports = router;