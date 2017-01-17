var express = require('express');
var mongoose = require('mongoose');
var bodyParser= require('body-parser');

var Note = require('./model/note');

var app = express();


mongoose.connect('mongodb://localhost/notes_1');

app.use(bodyParser.urlencoded({extended: true}));

app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", 'Content-Type, X-Requested-With, authorization, X-BM-Filename');
    res.header("Access-Control-Expose-Headers", "Accept-Ranges, Content-Encoding, Content-Length, Content-Range");
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, DELETE');
    next();
});

app.options("*", function(req, res) {
    res.send(200);
});

app.all('*', function(req, res, next) {
    setTimeout(next, 1000);
});

app.get('/notes', function(req, res) {
    Note.find({}, function(err, notes) {
        if (err) {
            res.send(404);
        } else {
            res.send(notes)
        }
    });
});

app.get('/notes/:id', function(req, res) {
    console.log(req.params);
    Note.findById(req.params.id, function(err, note) {
        if (err) {
            res.send(404);
        } else {
            res.send(note);
        }
    });
});

app.post('/notes', function(req, res) {
    console.log(req.body);
    var note = new Note({
        text: req.body.text,
        done: req.body.done
    });
    note.save(function(err, note) {
        if (err) {
            res.send(404);
        } else {
            res.send(note);
        }
    });
});

app.put('/notes/:id', function(req, res) {
    console.log(req.body);
    Note.findById(req.params.id, function(err, note) {
        if (err) {
            res.send(404);
        } else {
            note.text = req.body.text;
            note.done = req.body.done;
            note.save(function(err, note) {
                if (err) {
                    res.send(404);
                } else {
                    res.send(note);
                }
            });
        }
    });
});

app.delete('/notes/:id', function(req, res) {
    console.log(req.params);
    Note.findByIdAndRemove(req.params.id, function(err) {
        if (err) {
            res.send(404);
        } else {
            res.send({});
        }
    });
});

app.listen(5555, function(){
    console.log('Node server on port 5555');
});