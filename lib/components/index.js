import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            answer: 42
        };
    }

    asynchFunc = () =>  Promise.resolve(37);

    async componentDidMount() {
        this.setState({
            answer: await this.asynchFunc()
        });
    }

    render() {
        return <h2>Class Components  -- {this.state.answer}</h2>;
    }
}

export default App;

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
