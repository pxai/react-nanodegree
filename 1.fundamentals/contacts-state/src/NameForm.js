import React from 'react';
/**
 * a form as a Controlled Component
 * because is in control of the properties of the form
 * BENEFITS:
 * 1. instant input validation
 * 2. conditionaly enable/disable buttons
 * 3. enforce input formats
 */
class NameForm extends Component {
    state  = {
        email : ''
    }
handleChange = (event) => {
    this.setState({email: event.target.value});
}
    render () {
        return (
            <form>
                <input type="text" value={this.state.email} 
                        onChange={this.handleChange} />
                </form>
        )
    }
}