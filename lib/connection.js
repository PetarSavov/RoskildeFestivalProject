var mongoose = require('mongoose');
var dbUrl = 'mongodb://<Admin>:<test>@ds147497.mlab.com:47497/heroku_5hpwfw3p';
//mongoose uses instance of mongoDb and dbUrl for establishing connection
mongoose.connect(dbUrl);

process.on('SIGINT', function(){
  mongoose.connection.close(function(){
    console.log('Mongoose has desconnected from mongoDb instance');
    process.exit(0);
  });
});

require('../models.album');
require('../models.artist');
require('../models.event');
require('../models.song');
