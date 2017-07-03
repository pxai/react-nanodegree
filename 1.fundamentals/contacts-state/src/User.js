class User extends React.Component {
    state = {
        username: 'Pello'
    }
    /**
     * STATE: your UI is just a function of your state
     * When you change the state the UI changes.
     *  UI = fn(state)
     * Two ways of changing state: object style
     * Wwe just change what we specify Though the initial state of this component contains two properties (subject and message), they can be updated independently.
     * this.setState({
     * username: 'Xabier'
     * })
     * 
     * When we change existing: function style
     * this.setState((prevState) => ({
     *  username : 'Mr. ' + prevState.username
     * }))
     */
    render () {
        return (
            <p>Username: {this.state.username}</p>
        )
    }

}