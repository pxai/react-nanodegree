import React from 'react';
import BookShelf from './BookShelf';
import { Link } from 'react-router-dom';
import categories from './bookcategories'

class ListBooks extends React.Component {
    state = {

    }

    render () {
        return (
          <div className="list-books">
            <div className="list-books-title">
              <h1>Pello's MyReads</h1>
            </div>

            <div className="list-books-content">

              <div>
                {
                 this.props.categories.map((category) =>
                   (
                      <BookShelf key={category.shelf} title={category.name} 
                          onUpdateBook={this.props.onUpdateBook}
                          books={this.props.books.filter(
                              (book) => (book.shelf===category.shelf))} 
                      />
                   ))
                } 
              </div>
            </div>
            <div className="open-search">
              <Link to='/search' className='open-search'>Search</Link>
            </div>
            <div className="open-create">
              <Link to='/create' className='add-book'>Add a book</Link>
            </div>
          </div>
        )    
    }
}

export default ListBooks;