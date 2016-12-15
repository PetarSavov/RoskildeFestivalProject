//album with array of songs
var mongoose = require('mongoose');
var postFind = require('mongoose-post-find');
var async = require('async');
var Schema = mongoose.Schema;
var AlbumSchema = new Schema({
    albumId: {
        type: Number,
        required: true,
        unique: true
    },
    genre: {
        type: String,
        required: false
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    //String for a url link - chapter 13 further explanation
    image: {
      type: String,
      required: false,
      default: 'images/album.jpg';
    }
    songs: {
        type: [Schema.Types.Mixed]
    }
});
//song is searching for specific _id of album in MongoDB
function _attachSongs(Song, result, callback) {
    Song.find({
            album: result._id
        }, function(error, albums) {
            if (error)
                return callback(error);
        }
        result.songs = albums; callback(null, result);
    });
}
AlbumSchema.plugin(postFind, {
    find: function(result, callback) {
        var Album = mongoose.model('Album');
        async.each(result, function(item, callback) {
                _attachSongs(Song, item, callback);
            }, function(error) {
                if (error)
                    return callback(error);
            }
            callback(null, result)
        });
},
findOne: function(result, callback) {
    var Album = mongoose.model('Album');
    _attachSongs(Album, result, callback);
}
});

module.exports = mongoose.model('Album', AlbumSchema);
