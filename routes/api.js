/**
 * Created by migdonio1 on 12/4/16.
 */
var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

var Word = mongoose.model('Word');
var Site = mongoose.model('Site');
var User = mongoose.model('User');

router.use(function(req, res, next) {
    next();
});

//This route, convert previous documents without the plugin mongoose-random
router.route('/randomizerWords')
    .get(function (req, res) {
        Word.syncRandom(function (err, words) {
            if(err){
                res.send(err);
            } else {
                res.json("OK");
            }
        })
    });

router.route('/quiz/:quiz_length')
    .get(function(req, res) {

        var quizLength = parseInt(req.params.quiz_length);

        Word.findRandom().limit(quizLength)
            .exec(function(err, words) {
                if(err) {
                    res.send(err);
                } else {
                    res.json(words);
                }
            });
    });

router.route('/words')
    .post(function(req, res){
        Word.create(req.body, function(err, word) {
            if(err) {
                res.send(err);
            }else {
                res.json(word);
            }
        });
    })
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
    })
    .delete(function(req, res) {
        Word.remove({
          _id: req.params.word_id
        }, function(err, word){
            if(err){
                res.send(err);
            } else {
                res.json(word);
            }
        })
    });

router.route('/sites')
    .post(function(req, res) {
        Site.create(req.body, function(err, site){
            if(err) {
                res.send(err);
            } else {
                res.json(site);
            }
        });
    })
    .get(function(req, res) {
        Site.find({})
            .exec(function(err, sites) {
                if(err) {
                    res.send(err);
                } else {
                    res.json(sites);
                }
            })
    });

router.route('/sites/:site_id')
    .get(function(req, res) {
        Site.findById(req.params.site_id)
            .exec(function(err, site) {
                if(err) {
                    res.send(err);
                } else {
                    res.json(site);
                }
            })
    })
    .delete(function(req, res) {
        Site.remove({
            _id: req.params.site_id
        }, function(err, site){
            if(err) {
                res.send(err);
            } else {
                res.json(site);
            }
        })
    });

router.route('/login')
    .post(function (req, res) {
        User.find({
            name:req.body.name,
            password: req.body.password
        }, function (err, user) {
            if(err){
                res.send(err);
            }else{
                if(user.length == 0){
                    res.json('0');
                }else{
                    res.json(user);
                }
            }
        })
    });

router.route('/users')
    .post(function(req, res) {
        User.create(req.body, function (err, user) {
            if(err) {
                res.send(err);
            } else {
                res.json(user);
            }
        });
    });


module.exports = router;