import React from 'react';
import ReactDOM from 'react-dom';

/*functional component
const App = () => {
    );
    return <div>Latitude: </div>
};
*/

//class based component 
//extends allows us to pull built in functionality from class React.component
//subclassing react.component

class App extends React.Component {
    //not required by react, helpful to initialize state
    constructor(props){
        //React.component has own constructor, so super 
        super(props)
        //this object is for initializing state
        //null becaue we dont now what the lat is right now
        this.state = { lat: null, errorMessage:'' };

        window.navigator.geolocation.getCurrentPosition(
            //first callback when location successful
                position => {
                    //called setState to update state
                    this.setState({ lat: position.coords.latitude });
                },
            //failure callback
                err => {
                    this.setState({ errorMessage: err.message });
                }
        );
    }

    //react requires to define render
    //never get request in render because it gets called all the time
    render() {
            if (this.state.errorMessage && !this.state.lat) {
                return <div> Error: {this.state.errorMessage} </div>
            }
            if (this.state.lat && !this.state.errorMessage) {
                return <div> Latitude: {this.state.lat} </div>
            } 
            return <div> Loading... </div>
            
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));

