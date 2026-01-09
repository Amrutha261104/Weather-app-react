import SearchBox from "./SearchBox";
import InfoBox from "./Temp";
import { useState } from "react";
import "./WeatherApp.css";

export default function WeatherApp() {
    const [weatherInfo , setWeatherInfo ] = useState({   //state variable
    
        city: "Wonderland",
        feelsLike: 24.84,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather:"haze",
   
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };
    return (
        <div className="appContainer">
            <h1 className="app-title">Weather App ☀️🌧️</h1>

            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    );
}