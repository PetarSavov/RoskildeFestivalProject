var mongoose = require('mongoose');
var postFind = require('mongoose-post-find');
var async = require('async');
var Schema = mongoose.Schema;
//Name one field
var ArtistSchema = new Schema({
    artistId: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        first: {
            type: String,
            required: true
        },
        last: {
            type: String,
            required: true
        }
    },
    description: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,
        default: 'images/artist.png'
    },
    albums: {
        type: [Schema.Types.Mixed]
    },
    songs: {
        type: [Schema.Types.Mixed]
    }
});

function _attachAlbums(Album, result, callback) {
    Album.find({
            artist: result._id
        }, function(error, artists) {
            if (error)
                return callback(error);
        }
        result.albums = artists; callback(null, result);
    });
}
ArtistSchema.plugin(postFind, {
    find: function(result, callback) {
        var Artist = mongoose.model('Artist');
        async.each(result, function(item, callback) {
                _attachAlbums(Album, item, callback);
            }, function(error) {
                if (error)
                    return callback(error);
            }
            callback(null, result)
        });
},
findOne: function(result, callback) {
    var Artist = mongoose.model('Artist');
    _attachAlbums(Artist, result, callback);
}
});

module.exprots = mongoose.model('Artist', ArtistSchema);
