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
        <form onSubmit={handleSubmit} className='pb-4'>
            <input type="text" placeholder='San Miguel de Tucuman, Tucuman' onChange={onChange} className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" />
        </form>
    )
}

export default WeatherForm