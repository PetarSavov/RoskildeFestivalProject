var mongoose = require('mongoose');
var async = require('async');
require(process.cwd() + 'lib/connection');
var Artist = mongoose.model('Artist');
var Album = mongoose.model('Album');
var Song = mongoose.model('Song');
var Event = mongoose.model('Event');
//methods for song and album models
var data = {
    songs: [{
        songId: '404',
        title: 'Perfect strangers',
        genre: 'Pop',
        description: '2016 release',
        image: 'images/song.jpg'
    }, {
        songId: '403',
        title: 'Rockabye',
        genre: 'Pop',
        description: 'Sean Paul&Anne-Marie',
        image: 'images/song.jpg'
    }],
    albums: [{
        title: 'Perfect strangers'
    }, {
        title: 'Rockabye'
    }]
};

var deleteSongs = function(callback) {
  console.info('Deleting songs');
  Song.remove({}, function(error, response) {
    if(error) {
      console.error('Error removing songs:' + error);
    }
    console.info('Songs are deleted successfully');
    callback();
  });
};

var addSongs = function(callback) {
  console.info('Adding songs');
  Song.create(data.songs, function(error) {
    if(error) {
      console.error('Error when creating song' + error);
    }
    console.info('Songs are added successfully');
    callback();
  });
};

var DeleteAlbums = function(callback) {
  console.info('Deleting albums');
  Album.remove({}, function(error, response) {
    if(error) {
      console.error('Error when deleting albums' + error);
    }
    console.info('Operation "Deleting albums" is successful');
    callback();
  });
};

var addAlbums = function(callback) {
  console.info('Adding albums');
  Album.create(data.albums, function(error, album1) {
    if(error) {
      console.error('Error when creating album' + error);
    } else {
      data.album_id = team1._id;
    }
    console.info('Albums are added successfully');
    callback();
  });
};

var updateSongAlbums = function (callback) {
  console.info('Updating song albums');
  var album = data.ablum[0];

  Song.update({}, {
    album: data.album_id
  }, {
    multi: true
  }, function(error, numberAffected, response) {
    if(error) {
      console.error('Error updating song in albums' + error);
    }
    console.info('Update is successful');
    callback();
  });
};

async.series([
  deleteSongs,
  deleteAlbums,
  addSongs,
  addAlbums,
  updateSongAlbums
], function(error, results) {
  if(error) {
    console.error('Error:' + error);
  }
  mongoose.connection.close();
  console.log('Connection closed');
});
