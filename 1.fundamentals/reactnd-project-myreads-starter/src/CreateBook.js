import React,  {Component} from 'react';
import  { Link } from 'react-router-dom'; 
import ImageInput from './ImageInput';
import serializeForm from 'form-serialize';

class CreateBook extends Component {
    handleSubmit =  (e) => {
        e.preventDefault();
        const values = serializeForm(e.target, {hash: true});
        console.log(values);
        if (this.props.onCreateBook)
            this.props.onCreateBook(values);
    }

    render () {
        return (
            <div>
                <Link className="close-create-contact" to="/">Close</Link>
                <form onSubmit={this.handleSubmit} className="create-contact-form">
                        <div className="create-contact-details">
                                      <ImageInput
            className='create-contact-avatar-input'
            name='bookUrl'
            maxHeight={64}
          />
                            <div><label for="title">Title</label></div>
                            <div><input type="text" name="title" 
                                    placeholder="Book title here"/></div>
                            <div><label for="title">Author</label></div>
                            <div><input type="text" name="author" 
                                    placeholder="Author's name" /></div>
                            <div><label for="title">Status</label></div>
                            <div><input type="text"  name="status" 
                                    placeholder="Book status"  /></div>
                            <button>Create</button>
                        </div>
                    </form>
            </div>
        )
    }
}

export default CreateBook
