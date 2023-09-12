import { useEffect, useState } from 'react'
import WeatherForm from './WeatherForm'

const REACT_APP_KEY = 'cb99321b20924a3cbd7184734231209';
const REACT_APP_URL = 'https://api.weatherapi.com/v1/current.json?aqi=no'

export default function WeatherApp() {
    const [weather, setWeather] = useState(null)

    useEffect(() => {
        loadInfo();
    },[])

    useEffect(() => {
        document.title = `Clima | ${weather?.location.name ?? ''}`
    },[weather])

    async function loadInfo(city = 'san miguel de tucuman') {
        try {
            const res = await fetch(`${REACT_APP_URL}&key=${REACT_APP_KEY}&q=${city}`)
            const json = await res.json();

            setWeather(json)

            console.log(json);
        } catch (error) {
            console.log(error);
        }
    }

    const handleChangeCity = (city) => {
        setWeather(null);
        loadInfo(city);
    }

    return (
        <div>
            <WeatherForm onChangeCity={handleChangeCity} />
            <div>{weather?.current.temp_c}</div>
        </div>
    )
}
