const bookRoutes = require('./routes/bookRoutes');
const express = require('express');
const mongoose = require('mongoose');

// express app
const app = express();

// connect to mongodb
const dbURI = 'mongodb+srv://test1234:test1234@cluster0.wenwd.mongodb.net/nodebooks?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// middleware and view engine
app.set('view engine', 'ejs');
app.use(express.static('./public'));
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

// routes
app.get('/', (req, res) => {
  res.redirect('books');
});

// book routes
app.use('/books', bookRoutes);

// 404 page
app.use((req, res) => {
  res.status(404).render('pages/404', { title: '404' });
});
