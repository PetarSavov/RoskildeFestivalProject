//hard-coded JSON
// var employeeDb = require('../database/artists');
// exports.getArtists = getArtists;
// exports.getArtist = getArtist;
//
// function getArtists(callback) {
//     setTimeout(function() {
//         callback(null, artistDb);
//     }, 500);
// }
//
// function getArtist(artistId, callback) {
//     getArtists(function(error, data) {
//         if (error) {
//             return callback(error);
//         }
//         var result = data.find(function(item) {
//             return item.id === artistId;
//         });
//         callback(null, result);
//     });
// }

//Song route handlers
var mongoose = require('mongoose');
var Song = mongoose.model('Song');

exports.getSongs = getSongs;
exports.getSong = getSong;

function getSongs (callback) {
  Song.find().sort('title').exec(callback);
}

function getOneSong (callback) {
  Song.findOne({
    id: songId
  }).populate('album').exec(callback);
}
