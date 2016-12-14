/**
 * Created by ordon on 13/12/2016.
 */
'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
});

module.exports = mongoose.model('User', userSchema);