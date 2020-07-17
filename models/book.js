const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  publisher: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  synopsis: {
    type: String,
    required: true
  },
  imageURL: {
    type: String,
    required: true
  }
}, { timestamps: true });

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;