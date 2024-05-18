//Fake data base 
let books = [
  { title: "Love", ISBN: 123, publishedDate: "2000", author: "Faniel" },
  { title: "Tarzan", ISBN: 456, publishedDate: "2005", author: "Sirak" },
  { title: "Aladin", ISBN: 789, publishedDate: "2010", author: "Diana" },
];

//Book class
module.exports = class Book {

    //Constructor 
     constructor(title, ISBN, publishedDate, author) {
         this.title = title;
         this.ISBN = ISBN;
         this.publishedDate = publishedDate;
         this.author = author;
    }
    
    //readAll method 
    static readAll() {
        return books;
    }

    //readById method 
    static readByTitle(title) {
        let element = books.find(p => p.title == title);
        return element;
    }

    //create method 
    create() {
        books.push(this);
        return this;
    }

    //update method 
    updateByISBN(ISBN) {
        let index = books.findIndex(b => b.ISBN == ISBN);
        if (index > -1) {
            this.ISBN = ISBN;
            books[index] = this;
        } else {
            throw new Error(`Book not Found with this ISBN: ${ISBN}`);
        }
    }

    //delete method 
    static deleteByPublishedDate(publishedDate) {
        let index = books.findIndex(p => p.publishedDate == publishedDate);
        let bookToBeDeleted = books[index];
        if (index > -1) {
            books = books.filter(b => b.publishedDate != publishedDate);
            return bookToBeDeleted;
        } else {
             throw new Error(`Book is not found with published date : ${publishedDate}`);
        }
    }
    
}