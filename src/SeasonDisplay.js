import React from 'react';

//extract logic out of functional componenets as possible
const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
};

//determine if it is summer or winter. also the month
const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const text = season == 'winter' ? 'Burr, it is chilly' : 'Lets hit the beach!'
    //display text and icons
    const icon = season == 'winter' ? 'snowflake' : 'sun';

    //can use js expression or variable inside {}
    return (
        <div>
            <i className={`${icon} icon`}/> 
            <h1> {text} </h1>
            <i className={`${icon} icon`}/> 
        </div>
    )
}

export default SeasonDisplay;