import React, {Component} from 'react';


//created errorboudnry
class ErrorBoundry extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch() {
        this.setState({hasError: true})

    }

    render() {
        if (this.state.hasError) {
            return <h1>Oooops. That is not good</h1>
        }
        return this.props.children
    }

}

export default ErrorBoundry;
