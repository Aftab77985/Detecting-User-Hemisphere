import React from "react";
import "./weather-styles.css";

const weatherConfig = {
    summer:{
        text: "Let`s hit the Beach",
        icon: "sun"
    },
    winter:{
        text:"Brrrr Its freezing",
        icon: "snowflake"
    }
}

function determineWeather(lat , month){
if(month>2 && month<9){
    return lat>0 ? "summer" : "winter"
}
else {
    return lat>0 ? "winter" : "summer"
}
}


function Weather(props){
    const getWeather =  determineWeather(props.lat, props.month);
    const {text , icon} = weatherConfig[getWeather];

    return(
       <div className={`weather-styles ${getWeather}` }>
       <i className={`left-icon ${icon} icon massive`}></i>
        <h1>{text}</h1>
        <i className={`right-icon ${icon} icon massive`}></i>
       </div>
    );
}

export default Weather;