/**
 * Created by migdonio1 on 12/4/16.
 */
var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

var Word = mongoose.model('Word');

router.use(function(req, res, next) {
    next();
});

router.route('/words')
    .get(function(req, res) {
        Word.find({})
            .exec(function(err, words) {
                if(err) {
                    res.send(err);
                } else {
                    res.json(words);
                }
            });
    });

/*router.route('/dummyCreate')
    .get(function(req, res) {
        var wordData = {
            original:"日本",
            syllables: "にほん",
            translates: [
                "Japon"
            ],
            types: [
                "Sustantivo"
            ],
            notes: "Aqui nacio el japones"
        };

        Word.create(wordData, function(err, word) {
            if (err) {
                res.send(err);
            }else {
                res.json(word);
            }
        });
    });*/

router.route('/words/:word_id')
    .get(function(req, res) {
        Word.findById(req.params.word_id)
            .exec(function(err, word) {
                if(err) {
                    res.send(err);
                } else {
                    res.json(word);
                }
            });
    });

module.exports = router;