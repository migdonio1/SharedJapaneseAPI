/**
 * Created by migdonio1 on 12/4/16.
 */
'use strict';

var mongoose = require('mongoose');
var random = require('mongoose-random');

var Schema = mongoose.Schema;

var wordSchema = new Schema ({
    original: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    syllables: {
        type: String,
        required: true,
        trim: true
    },
    translates: [
        {
            type: String,
            required: true,
            trim: true
        }
    ],
    types: [
        {
            type: String,
            required: true,
            trim: true
        }
    ],
    notes: {
        type: String,
        trim: true
    }
});

wordSchema.plugin(random, { path: "r"});

module.exports = mongoose.model('Word', wordSchema);