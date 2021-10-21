import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner'
import Clock from './Clock'

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
    state = { lat: null, errMessage: ''};
    
    /*not required by react, helpful to initialize state
    constructor(props){
        //React.component has own constructor, so super 
        super(props)
        */
        //this object is for initializing state
        //null becaue we dont now what the lat is right now
        // this.state = { lat: null, errorMessage:'' };

    



//best practice to load data in didmount method

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            //first callback when location successful
                position => this.setState({ lat: position.coords.latitude }),
                    //called setState to update state
            //failure callback
                err => this.setState({ errorMessage: err.message }),
        );
    };

    componentDidUpdate(){
        console.log("Component did update")
    };

    //helper function helps contain all code in render method
    //conditional logic in helper method
    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div> Error: {this.state.errorMessage} </div>
        }
        if (this.state.lat && !this.state.errorMessage) {
            return <SeasonDisplay lat={this.state.lat}/>
        } 
        return <div> <Spinner message="Please Accept Location Request"/> </div>
        
    }
    

    //react requires to define render
    //never get request in render because it gets called all the time
    render() {
           return (
               <div className="border red">
                   <Clock />
                   {this.renderContent()}
               </div>
           )
    }
}



ReactDOM.render(<App/>, document.querySelector('#root'));

