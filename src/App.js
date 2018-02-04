import React, {Component} from 'react';
import Header from './Header';
import './css/App.css';

class App extends Component {
    render() {
        return (
            <div>
                <Header title="This is the title"/>
                {this.props.children}
            </div>
        );
    }
}

export default App;
