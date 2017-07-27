import React from 'react'
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import CreateBook from './CreateBook'
import booksdata from './bookdata'
import categories from './bookcategories'
import { Link } from 'react-router-dom';

class BooksApp extends React.Component {
 state = {
    books: [], //booksdata,
    searchedBooks: [],
    categories: categories
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      console.log(books);
      this.setState({ books })
    })
  }

  updateBook = (book) => {
    this.setState((state) => ({
      books: state.books.filter((c) => c.id !== book.id)
    }))
    this.setState(state => ({
        books: state.books.concat([ book ])
      }))
      
    BooksAPI.update(book)
  }

  searchBook = (term) => {
    console.log('Searching for: '  + term)
     BooksAPI.search(term, 10).then((searchResult) => {
      console.log(searchResult);
      this.setState({ 
        searchedBooks: searchResult 
      })
    })
  }
    createBook(book) {
      if (!book.imageLinks)
        book.imageLinks = { thumbnail : 'http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api'};
      else
        book.imageLinks = { thubnail: book.imageLinks }

      book.authors = book.authors.split(',')

      this.setState(state => ({
        books: state.books.concat([ book ])
      }))
    //})
  }

  render() {
    return (
      <div className="app">
        <div className="list-books">
            <div className="list-books-title">
              <h1>Pello's MyReads</h1>
            </div>

        <Route path="/" exact render={() => (
            <ListBooks 
              books={this.state.books} 
              categories={categories} 
              onUpdateBook={(book) => this.updateBook(book)}
            />
        )}/>
        <Route path="/search" exact render={({history}) => (
            <SearchBooks 
              books={this.state.searchedBooks}
              onUpdateBook={(book) => this.updateBook(book)}
              onSearchBook={(book) => {
              this.searchBook(book)
            }}
            />
        )}/>
        <Route path='/create' render={({ history }) => (
            <CreateBook
              onCreateBook={(book) => {
                this.createBook(book)
                history.push('/')
              }}
            />
        )}/>
            <div className="open-search">
              <Link to='/search' className='open-search'>Search</Link>
            </div>
            <div className="open-create">
              <Link to='/create' className='add-book'>Add a book</Link>
            </div>
      </div>
      </div>
    )
  }
}

export default BooksApp
