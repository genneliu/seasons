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
        this.state = { lat: null };
    }

    //react requires to define render
    render() {
        window.navigator.geolocation.getCurrentPosition(
    //first callback when location successful
        position => console.log(position),
    //failure callbac
        err => console.log(err)
        );

    return <div> Latitude: </div>;
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));

