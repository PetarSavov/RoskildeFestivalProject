var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var SongSchema = new Schema({
  songId: {
    type: Number,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true,
    default: 'images/song.jpg'
  }
});
//mongoose module uses export method to retrieve data from Song model
//by using the so called table structure
module.exports = mongoose.model('Song', SongSchema);
