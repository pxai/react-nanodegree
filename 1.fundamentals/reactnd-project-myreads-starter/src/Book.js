import React from 'react'
import BookShelfChanger from './BookShelfChanger'

class Book extends React.Component {
    state = {

    }

    render () {
        const onUpdateBook  = this.props.onUpdateBook
        return (
              <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{width : this.props.book.image.width, 
                                                        height : this.props.book.image.height, 
                                                        backgroundImage : this.props.book.image.backgroundImage}}>
                                                    </div>
                            <BookShelfChanger book={this.props.book} onUpdateBook={onUpdateBook} />
                          </div>
                          <div className="book-title">{this.props.book.title}</div>
                          <div className="book-authors">{this.props.book.author}</div>
                        </div>
        )
    }
}

export default Book