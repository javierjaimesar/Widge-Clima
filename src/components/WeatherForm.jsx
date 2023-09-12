import { useState } from 'react';

function WeatherForm({ onChangeCity }) {
    const [city, setCity] = useState('')

    const onChange = (e) => {
        const value = e.target.value;

        if (value !== "") {
            setCity(value);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        onChangeCity(city);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='San Miguel de Tucuman, Tucuman' onChange={onChange} />
        </form>
    )
}

export default WeatherForm