var mongoose = require('mongoose');

var Note = require('../model/note');

mongoose.connect('mongodb://localhost/notes_1');

var data = [{
    "text": "Homework",
    "done": false
}, {
    "text": "Shopping",
    "done": false
}, {
    "text": "Make a coffee",
    "done": true
}, {
    "text": "Drink a coffee",
    "done": false
}, {
    "text": "Buy a bread",
    "done": true
}, {
    "text": "Send an email",
    "done": true
}, {
    "text": "Watch a movie",
    "done": false
}, {
    "text": "Meet with parents on monday",
    "done": true
}, {
    "text": "Write a letter",
    "done": true
}];

data.forEach(function(item) {

    var note = new Note({
        text: item.text,
        done: item.done
    });

    note.save(function(err, note) {
        if (err) {
            console.log(err)
        } else {
            console.log('saved: ' + item.text);
        }
    });
});
