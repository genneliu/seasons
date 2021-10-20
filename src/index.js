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

