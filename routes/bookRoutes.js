const Book = require('../models/book');
const express = require('express');

//set up router
const router = express.Router();

// routes
router.get('/', (req, res) => {
  Book.find().sort({ author: 1, year: 1})
    .then((result) => {
      res.render('pages/index', { title: 'All Books', books: result });
    })  
    .catch(err => console.log(err));
});

router.post('/', (req, res) => {
  const blog = new Book(req.body);

  blog.save()
    .then((result) => {
      res.redirect('books');
    })
    .catch(err => console.log(err));
});

router.get('/add', (req, res) => {
  res.render('pages/add', { title: 'Add a new book'});
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  Book.findById(id)
    .then((result) => {
      res.render('pages/details', { title: 'Book Details', book: result });
    })
    .catch(err => console.log(err));
});

router.delete('/:id', (req, res) =>{
  const id = req.params.id;
  Book.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: '/books' });
    })
    .catch(err => console.log(err));
});

module.exports = router;