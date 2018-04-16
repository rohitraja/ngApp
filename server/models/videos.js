const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const videoSchema = new Schema({
  name: String,
  url: String,
  description: String
});


module.exports = mongoose.model('videos', videoSchema, 'videos');

