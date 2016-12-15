var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var EventSchema = new Schema({
    eventId: {
        type: Number,
        required: true,
        unique: true
    },
    title: {
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
        default: 'images/event.jpg'
    },
    date: {
        type: String,
        required: true,
    },
    artists: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Artist'
    }
});

module.exports = mongoose.model('Event', EventSchema);
