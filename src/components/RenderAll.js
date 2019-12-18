import React from "react";
import Weather from "./Weather";


const RenderAll = (props) => {

    const finalForecast =  props.forecast.map((daily,i) => {
    return <Weather
                time = {props.forecast[i].dt_txt}
                max_temperature={props.forecast[i].main.temp_max}  
                min_temperature={props.forecast[i].main.temp_min} 
                humidity={props.forecast[i].main.humidity}
                desc={props.forecast[i].weather[0].description}
                />


})
    return (<div>
            {finalForecast}
            </div>
    )
}

export default RenderAll;