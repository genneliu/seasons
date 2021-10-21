import './SeasonDisplay.css';

import React from 'react';


const seasonConfig = {
    summer: {
        text: 'lets hit the beach!',
        iconName: 'sun'
    },
    winter: {
        text: 'burr, its chilly!',
        iconName: 'snowflake'
    }
};

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
    const { text, iconName } = seasonConfig[season]; // {text, iconName}
    //refactor ternary expressions, create configuration object at top
    // const text = season == 'winter' ? 'Burr, it is chilly' : 'Lets hit the beach!'
    // //display text and icons
    // const icon = season == 'winter' ? 'snowflake' : 'sun';



    //can use js expression or variable inside {}
    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`}/> 
            <h1> {text} </h1>
            <i className={`icon-right massive ${iconName} icon`}/> 
        </div>
    );
};

export default SeasonDisplay;