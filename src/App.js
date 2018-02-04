import React, {Component} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './css/App.css';

class App extends Component {
    state = {
        address: "",
        placeId: "",
        location: {}
    }

    componentWillMount(){
        localStorage.setItem('saved', JSON.stringify([]));
    }

    newAddress = (address, placeId, location) => {
        console.log(address, placeId, location)
        this.setState({address: address, placeId: placeId, location: location})
    }

    render() {
        return (
            <div>
                <Header title="SLOMe" newAddress={this.newAddress}/>
                {React.Children.map(this.props.children,
                    (child) => React.cloneElement(child, {
                        address: this.state.address,
                        placeId: this.state.placeId,
                        location: this.state.location
                    }))}
                <Footer/>
            </div>
        );
    }
}

export default App;
