import React from "react";

const Weather = props => (
	<div className="weather__info">
	 
{ 	
	props.time && <p className="weather__keyTime">  
		<span className="weather__valueTime"> { props.time }	</span>
	</p> 
}

	{ 	
	 	props.max_temperature && <p className="weather__key"> Max Temperature: 
	 		<span className="weather__value"> { props.max_temperature }	</span>
	 	</p> 
   }	 
   
   { 	
	 	props.min_temperature && <p className="weather__key"> Min Temperature: 
	 		<span className="weather__value"> { props.min_temperature }	</span>
	 	</p> 
	 }

	 { 	
	 	props.humidity && <p className="weather__key"> Humidity: 
	 		<span className="weather__value"> { props.humidity } </span>
	 	</p> 
	 }
	 { 	
	 	props.desc && <p className="weather__key"> Conditions: 
	 		<span className="weather__value"> { props.desc } </span>
	 </p> 
	 }

	 
	</div>
);

export default Weather;

    
    
