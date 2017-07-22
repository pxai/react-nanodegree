import React from 'react'
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import CreateBook from './CreateBook'

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
    books: []
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }
  updateBook = (book) => {
   /* this.setState((state) => ({
      books: state.books.filter((c) => c.id !== book.id)
    }))*/

    BooksAPI.update(book)
  }


    createBook(book) {
    /*BooksAPI.create(book).then(book => {
      this.setState(state => ({
        books: state.books.concat([ book ])
      }))
    })*/
  }

  render() {
    return (
      <div className="app">
        <Route path="/" exact render={() => (
            <ListBooks />
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
