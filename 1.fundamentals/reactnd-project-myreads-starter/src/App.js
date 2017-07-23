import React from 'react'
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import CreateBook from './CreateBook'
import booksdata from './bookdata'
import categories from './bookcategories'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

 state = {
    books: booksdata,
    categories: categories
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }
  updateBook = (book) => {
    this.setState((state) => ({
      books: state.books.filter((c) => c.id !== book.id)
    }))
    //BooksAPI.update(book)
  }


    createBook(book) {
      book.image = { width: 128, height: 192, backgroundImage: 'url("http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api")' };
    //BooksAPI.create(book).then(book => {
      this.setState(state => ({
        books: state.books.concat([ book ])
      }))
    //})*/
  }

  render() {
    return (
      <div className="app">
        <Route path="/" exact render={() => (
            <ListBooks books={this.state.books} categories={categories} 
              onUpdateBook={(book) => this.updateBook(book)}
            />
        )}/>
        <Route path="/search" exact render={() => (
            <SearchBooks />
        )}/>
        <Route path='/create' render={({ history }) => (
          <CreateBook
            onCreateBook={(book) => {
              this.createBook(book)
              history.push('/')
            }}
          />
        )}/>

      </div>
    )
  }
}

export default BooksApp
