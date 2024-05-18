const Book = require("../Models/Book");

exports.readAll = (req, res, next) => {
    res.status(200).json(Book.readAll());
}

exports.read = (req, res, next) => {
    res.status(200).json(Book.readByTitle(req.params.title));
}

exports.create = (req, res, next) => {
    let newBook = new Book(req.body.title, req.body.ISBN, req.body.publishedDate, req.body.author);
    res.status(200).json(newBook.create());
}

exports.updateByISBN = (req, res, next) => {
  let newBook = new Book(
    req.body.title,
    req.params.isbn,
    req.body.publishedDate,
    req.body.author
  );
  newBook.updateByISBN(parseInt(req.params.isbn));
  res.status(204).end();
};

exports.deleteByPublishedDate = (req, res, next) => {
  res.status(200).json(Book.deleteByPublishedDate(req.params.publishedDate));
}