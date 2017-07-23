import React from 'react';
import BookShelf from './BookShelf';
import { Link } from 'react-router-dom';
import books from './bookdata'
import categories from './bookcategories'

class ListBooks extends React.Component {
    state = {

    }

    render () {
        return (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {
                 this.props.categories.map((category) =>
                   (
                      <BookShelf title={category.name} 
                          onUpdateBook={this.props.onUpdateBook}
                          books={this.props.books.filter(
                              (book) => (book.status===category.status))} 
                      />
                   ))
                } 
              </div>
            </div>
            <div className="open-search">
              <Link to='/create' className='add-contact'>Add a book</Link>
            </div>
          </div>
        )    
    }
}

export default ListBooks;