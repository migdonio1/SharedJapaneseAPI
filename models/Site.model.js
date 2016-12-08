/**
 * Created by migdonio1 on 12/8/16.
 */
'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var siteScheme = new Schema({
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
    description: {
        type: String,
        requires: true,
        trim: true
    },
    country: {
        type: String,
        requires: true,
        trim: true
    },
    position: {
        latitude: {
            type: Number,
            required: true
        },
        longitude: {
            type: Number,
            require: true
        }
    }

});

module.exports = mongoose.model('Site', siteScheme);