var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var noteSchema = new Schema({
    text: { type: String, required: true },
    done: Boolean,
    created_at: Date,
    updated_at: Date
});

// on every save, add the date
noteSchema.pre('save', function(next) {
    // get the current date
    var currentDate = new Date();

    // change the updated_at field to current date
    this.updated_at = currentDate;

    // if created_at doesn't exist, add to that field
    if (!this.created_at) {
        this.created_at = currentDate;
    }

    next();
});

var Note = mongoose.model('Note', noteSchema);

module.exports = Note;
